export type AgreementType = 'ms' | 'fs' | 'mp' | 'fp';

export type Section = {
  key: string;
  content?: string;
  show?: boolean;
};
export type Replace = {
  key: string;
  value?: string;
};
export type Tag = {
  key: string;
  value?: string;
};
export type Agreement = {
  key: string;
  value: {
    ms: string | null;
    fs: string | null;
    mp: string | null;
    fp: string | null;
  };
};

export const formatSections = (content: string, sections: Section[]) => {
  return sections.reduce((updatedContent, { key, show }) => {
    const startTag = `[#S:${key}]`;
    const endTag = `[#/S:${key}]`;

    if (show === false) {
      const escapedStartTag = startTag.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
      const escapedEndTag = endTag.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
      return updatedContent.replace(new RegExp(`${escapedStartTag}[\\s\\S]*?${escapedEndTag}`, 'g'), '');
    }
    // Si show est true, supprimer uniquement les balises [#S:sectionKey] et [#/S:sectionKey]
    return updatedContent.replace(startTag, '').replace(endTag, '');
  }, content); // Initialiser l'accumulateur avec le contenu original
};
export const extractSections = (str: string) => {
  const regex = /\[#S:([^\]]+)\](.*?)\[#\/S:\1\]/gs;

  return [...str.matchAll(regex)].reduce<Section[]>((acc, match) => {
    const key = match[1]; // La clé entre [#S: et ]
    const content = match[2].trim(); // Le contenu entre [#S:XXX] et [#/S:XXX]

    // Accumuler le résultat dans le tableau
    acc.push({ key, content, show: false });

    return acc;
  }, []);
};

export const formatReplaces = (content: string, replaces: Replace[]) => {
  const regex = /\[#R:(.*?)\]/g; // Expression régulière pour capturer les tags comme [#R:Label]

  // Remplacer toutes les occurrences de chaque tag trouvé dans le contenu
  return content.replace(regex, (match, label) => {
    const value = replaces.find((replace) => replace.key === label)?.value;
    return value || match; // Si la valeur existe, on remplace le tag, sinon on garde le tag intact
  });
};
export const extractReplaces = (str: string) => {
  const regex = /\[#R:(.*?)\]/g; // Expression régulière pour capturer les tags comme [#R:Label]

  return [...str.matchAll(regex)].reduce<Replace[]>((acc, match) => {
    const key = match[1]; // La clé entre [#S: et ]

    if (acc.find((replace) => replace.key === key)) {
      return acc;
    }
    acc.push({ key });

    return acc;
  }, []);
};

export const formatAgreements = (
  content: string,
  agreements: Agreement[],
  selectedAgreementType: AgreementType | null,
) => {
  if (!selectedAgreementType) {
    return content;
  }
  const regex = /\[#ACC:([^\]]+)\]/g; // Expression régulière pour capturer les accord comme [#ACC:Accord]

  // Remplacer toutes les occurrences de chaque tag trouvé dans le contenu
  return content.replace(regex, (match, label) => {
    const value = agreements.find((replace) => replace.key === label)?.value as any;
    return value && selectedAgreementType && value[selectedAgreementType] ? value[selectedAgreementType] : match; // Si la valeur existe, on remplace le tag, sinon on garde le tag intact
  });
};
export const extractAgreement = (str: string) => {
  const regex = /\[#ACC:([^\]]+)\]/g; // Expression régulière pour capturer les tags comme [#ACC:Accord]

  return [...str.matchAll(regex)].reduce<Agreement[]>((acc, match) => {
    const key = match[1]; // La clé entre [#ACC: et ]

    if (acc.find((replace) => replace.key === key)) {
      return acc;
    }
    acc.push({ key, value: { ms: null, fs: null, mp: null, fp: null } });

    return acc;
  }, []);
};

export const extractTags = (content: string) => {
  const regex = /\[#([A-Za-z0-9]+):([^\]]+)\]/g; // Expression régulière pour capturer les balises [#X:YYY]

  // Utilisation de matchAll pour récupérer toutes les correspondances dans le contenu
  const matches = [...content.matchAll(regex)];

  // Utilisation de reduce pour accumuler les balises dans un objet
  return matches.reduce<Tag[]>((acc, match) => {
    const key = match[1]; // Partie avant ":"
    const value = match[2]; // Partie après ":"

    // Ajouter la clé et la valeur à l'objet
    acc.push({ key, value });

    return acc;
  }, []); // Initialisation de l'accumulateur avec un objet vide
};
