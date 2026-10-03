/**
 * Fusionne dans chaque classe les membres de ses ancêtres présents dans l'index.
 * Les membres hérités portent `inheritedFrom` : la page d'un composant les
 * affiche dans une section repliée, distincte de son API propre.
 */
export function resolveInheritance(classes) {
  const index = new Map(classes.map((c) => [c.className, c]));

  return classes.map((cls) => {
    const members = [...cls.members];
    const taken = new Set(members.map((m) => m.name));
    const visited = new Set([cls.className]);

    let ancestorName = cls.extendsName;
    while (ancestorName && !visited.has(ancestorName)) {
      visited.add(ancestorName);

      const ancestor = index.get(ancestorName);
      if (!ancestor) break;

      for (const member of ancestor.members) {
        if (taken.has(member.name)) continue; // la classe fille l'emporte
        taken.add(member.name);
        members.push({ ...member, inheritedFrom: ancestorName });
      }
      ancestorName = ancestor.extendsName;
    }

    return { ...cls, members };
  });
}
