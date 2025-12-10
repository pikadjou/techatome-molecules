import { FileData } from "@ta/utils";

import { Document } from "../files-extended/src/public-api";

export const __file: FileData = {
  id: 84052,
  url: "https://arthurstoragedevtest.blob.core.windows.net/test/offer-requests/40276/ticket-2023-SKYS-32586-RAPQZ1-TD.pdf.pdf",
  type: "Document",
  fileMetaData: {
    fileName: "ticket-2023-SKYS-32586-RAPQZ1-TD.pdf",
    fileType: {
      id: 1450,
      translatedValue: "Attestation TVA",
    },
    filesize: 1093485,
    owner: {
      id: 504,
      naming: {
        trigram: "BENITO",
      },
    },
  },
  fileExtension: 1,
};

export const __document = (doc?: Partial<Document>) => ({
  ...{
    id: 84052,
    url: "https://arthurstoragedevtest.blob.core.windows.net/test/offer-requests/40276/ticket-2023-SKYS-32586-RAPQZ1-TD.pdf.pdf",
    isOwner: false,
    fileMetadata: {
      fileName: "ticket-2023-SKYS-32586-RAPQZ1-TD.pdf",
      fileType: {
        id: 1450,
        translatedValue: "Attestation TVA",
      },
      fileSize: 1093485,
      owner: null,
      description: "",
      creationDate: "",
    },
  },
  ...doc,
});
