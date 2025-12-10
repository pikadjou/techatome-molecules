export interface BaseStrapi {
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export const baseStrapiProps: (keyof BaseStrapi)[] = [
  "createdAt",
  "updatedAt",
  "publishedAt",
];
