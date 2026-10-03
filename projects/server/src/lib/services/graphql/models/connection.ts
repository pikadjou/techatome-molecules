/**
 * Une connexion au format Relay, telle que l'API la renvoie : le curseur de fin, la présence d'une
 * page suivante, et les nœuds. Les deux champs sont optionnels parce qu'une réponse partielle ou
 * vide reste une réponse.
 */
export interface TaConnection<T> {
  pageInfo?: { hasNextPage: boolean; endCursor: string | null } | null;
  nodes?: T[] | null;
}

/** La même page, à plat : ce qu'un écran ou un état de service consomme. */
export interface TaPage<T> {
  nodes: T[];
  hasNextPage: boolean;
  endCursor: string | null;
}

/** Le corps d'une connexion, écrit une seule fois pour toutes les requêtes paginées. */
export function connectionFields(props: string): string {
  return `
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ${props}
    }
  `;
}

/** Avant toute lecture, et à chaque relecture depuis le début. */
export function emptyPage<T>(): TaPage<T> {
  return { endCursor: null, hasNextPage: false, nodes: [] };
}

/** Aplatit la réponse de l'API ; une connexion absente vaut une page vide. */
export function toPage<T>(connection: TaConnection<T> | null | undefined): TaPage<T> {
  return {
    endCursor: connection?.pageInfo?.endCursor ?? null,
    hasNextPage: connection?.pageInfo?.hasNextPage ?? false,
    nodes: connection?.nodes ?? [],
  };
}

/** La page suivante s'ajoute à ce qui est déjà lu ; le curseur et la suite sont ceux de la dernière. */
export function appendPage<T>(current: TaPage<T>, next: TaPage<T>): TaPage<T> {
  return { ...next, nodes: [...current.nodes, ...next.nodes] };
}
