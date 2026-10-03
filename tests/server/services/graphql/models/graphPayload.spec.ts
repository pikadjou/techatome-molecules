import { createQuery } from "@lib/server/services/graphql/models/graphPayload";

describe("createQuery", () => {
  it("should create a basic query payload with name", () => {
    const result = createQuery("users");
    expect(result.name).toBe("users");
    expect(result.query).toBeDefined();
    expect(result.variables).toEqual({});
  });

  it("should include props in the query when provided", () => {
    const result = createQuery("users", { props: "id name email" });
    expect(result.name).toBe("users");
    expect(result.variables).toEqual({});
  });

  it("should include where variables when provided", () => {
    const where = { name: { eq: "test" } } as any;
    const result = createQuery("users", { props: "id name", where });
    expect(result.variables.where).toEqual(where);
  });

  it("should include order variables when provided", () => {
    const order = { name: "ASC" } as any;
    const result = createQuery("users", { props: "id name", order });
    expect(result.variables.order).toEqual(order);
  });

  it("should not include where in variables when not provided", () => {
    const result = createQuery("users", { props: "id" });
    expect(result.variables.where).toBeUndefined();
  });

  it("should not include order in variables when not provided", () => {
    const result = createQuery("users", { props: "id" });
    expect(result.variables.order).toBeUndefined();
  });

  it("should handle take parameter", () => {
    const result = createQuery("users", { props: "id", take: 10 });
    expect(result.name).toBe("users");
  });

  it("should capitalize the query name", () => {
    const result = createQuery("users", { props: "id" });
    expect(result.query).toBeDefined();
  });

  it("should handle prefixType for filter/sort input types", () => {
    const where = { name: { eq: "test" } } as any;
    const result = createQuery("users", {
      props: "id name",
      where,
      prefixType: "user",
    });
    expect(result.variables.where).toEqual(where);
  });

  it("should handle all parameters together", () => {
    const where = { status: { eq: "active" } } as any;
    const order = { name: "ASC" } as any;

    const result = createQuery("projects", {
      props: "id name status",
      where,
      order,
      take: 50,
      prefixType: "project",
    });

    expect(result.name).toBe("projects");
    expect(result.variables.where).toEqual(where);
    expect(result.variables.order).toEqual(order);
  });

  // Le texte de la requête, tel qu'il part au serveur.
  const body = (payload: { query: { loc?: { source: { body: string } } } }) =>
    (payload.query.loc?.source.body ?? "").replace(/\s+/g, " ");

  it("declares query-specific arguments with their GraphQL type", () => {
    const result = createQuery("recommendedTenants", {
      props: "tenantId",
      args: { estateId: { type: "UUID!", value: "e1" } },
    });

    expect(body(result)).toContain(
      "query RecommendedTenants($estateId: UUID!)"
    );
    expect(body(result)).toContain("recommendedTenants(estateId: $estateId)");
    expect(result.variables).toEqual({ estateId: "e1" });
  });

  it("pages by cursor: first/after as variables, pageInfo and nodes as body", () => {
    const result = createQuery("myPayments", {
      props: "id",
      paging: { mode: "cursor", first: 20, after: "abc" },
    });

    expect(body(result)).toContain(
      "query MyPayments($first: Int, $after: String)"
    );
    expect(body(result)).toContain("myPayments(first: $first, after: $after)");
    expect(body(result)).toContain(
      "pageInfo { hasNextPage endCursor } nodes { id }"
    );
    expect(result.variables).toEqual({ after: "abc", first: 20 });
  });

  it("pages by cursor from the start: a null cursor is still sent", () => {
    const result = createQuery("myPayments", {
      props: "id",
      paging: { mode: "cursor" },
    });
    expect(result.variables).toEqual({ after: null, first: null });
  });

  it("pages by offset: skip/take, totalCount and items as body", () => {
    const order = [{ name: "ASC" }] as any;
    const result = createQuery("tasks", {
      props: "id",
      order,
      take: 10,
      paging: { mode: "offset", skip: 20 },
    });

    expect(body(result)).toContain("tasks(order: $order, take: 10, skip: 20)");
    expect(body(result)).toContain("totalCount items { id }");
    expect(result.variables.order).toEqual(order);
  });

  it("keeps a plain list body without paging", () => {
    const result = createQuery("users", { props: "id" });
    expect(body(result)).toContain("query Users { users { id } }");
    expect(body(result)).not.toContain("pageInfo");
    expect(body(result)).not.toContain("items");
  });
});
