import { describe, expect, test } from "@jest/globals";
import AtbashCipher from "@/utils/atbash-cipher";

const aplhabetEng: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const aplhabetRu: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

describe("atbash cipher", () => {
  test("encode should work with eng alphabet", () => {
    expect(AtbashCipher("Some text with spaces", aplhabetEng)).toBe(
      "Hlnv gvcg drgs hkzxvh"
    );
  });
  test("encode should work with ru alphabet", () => {
    expect(AtbashCipher("Какой-то текст с пробелами", aplhabetRu)).toBe(
      "Фяфрх-мр мъфнм н порюъуятц"
    );
  });
  test("encode should work with empty string", () => {
    expect(AtbashCipher("", aplhabetRu)).toBe("");
  });
  test("decode should work with eng alphabet", () => {
    expect(AtbashCipher("Hlnv gvcg drgs hkzxvh", aplhabetEng)).toBe(
      "Some text with spaces"
    );
  });
  test("decode should work with ru alphabet", () => {
    expect(AtbashCipher("Фяфрх-мр мъфнм н порюъуятц", aplhabetRu)).toBe(
      "Какой-то текст с пробелами"
    );
  });
  test("decode should work with empty string", () => {
    expect(AtbashCipher("", aplhabetRu)).toBe("");
  });
});
