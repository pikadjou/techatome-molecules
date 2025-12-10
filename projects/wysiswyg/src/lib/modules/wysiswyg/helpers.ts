import edjsHTML from "editorjs-html";

import { WysiswgBlockData } from "./public-api";

export const convertBlocksToHtml = (blocks: WysiswgBlockData[]) => {
  const edjsParser = edjsHTML();

  return edjsParser.parse({ blocks }).join(" ");
};
