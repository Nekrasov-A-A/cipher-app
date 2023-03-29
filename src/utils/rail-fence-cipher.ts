const encodeRailFenceCipher = (text: string, numberRails: number): string => {
  if (!text) return "";
  text = text.replace(/[\s]/g, "");
  const fence: Array<string[]> = new Array(numberRails).fill(0).map(() => []);
  let idxHelper = new Array(numberRails).fill(0).map((_, idx) => idx);
  idxHelper = idxHelper.concat(
    idxHelper.slice(1, idxHelper.length - 1).reverse()
  );
  const idxFence: string[] = idxHelper
    .join("")
    .repeat(Math.ceil(text.length / idxHelper.length))
    .split("");

  for (let i = 0; i < text.length; i++) {
    fence[+idxFence[i]].push(text[i]);
  }
  return fence.map((el) => el.join("")).join("");
};

const decodeRailFenceCipher = (text: string, numberRails: number): string => {
  if (!text) return "";
  text = text.replace(/[\s]/g, "");
  const result: string[] = [];
  let idxHelper = new Array(numberRails).fill(0).map((_, idx) => idx);
  idxHelper = idxHelper.concat(
    idxHelper.slice(1, idxHelper.length - 1).reverse()
  );
  const idxFence: string[] = idxHelper
    .join("")
    .repeat(Math.ceil(text.length / idxHelper.length))
    .split("")
    .slice(0, text.length);
  const orderLetters = Object.entries(idxFence)
    .sort((a, b) => +a[1] - +b[1])
    .map((el) => el[0]);
  orderLetters.forEach((el, idx) => (result[+el] = text[idx]));
  return result.join("");
};

export { encodeRailFenceCipher, decodeRailFenceCipher };
