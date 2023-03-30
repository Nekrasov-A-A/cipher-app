import { describe, expect, test } from "@jest/globals";
import * as AtbashCipher from "@/utils/atbash-cipher";

const aplhabetEng: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const aplhabetRu: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

describe("atbash cipher", () => {
  test("encode should work with eng alphabet", () => {
    expect(AtbashCipher.encode("Some text with spaces", aplhabetEng)).toBe(
      "Hlnv gvcg drgs hkzxvh"
    );
  });
  test("encode should work with ru alphabet", () => {
    expect(AtbashCipher.encode("Какой-то текст с пробелами", aplhabetRu)).toBe(
      "Фяфрх-мр мъфнм н порюъуятц"
    );
  });
  test("encode should work with empty string", () => {
    expect(AtbashCipher.encode("", aplhabetRu)).toBe("");
  });
  test("decode should work with eng alphabet", () => {
    expect(AtbashCipher.decode("Hlnv gvcg drgs hkzxvh", aplhabetEng)).toBe(
      "Some text with spaces"
    );
  });
  test("decode should work with ru alphabet", () => {
    expect(AtbashCipher.decode("Фяфрх-мр мъфнм н порюъуятц", aplhabetRu)).toBe(
      "Какой-то текст с пробелами"
    );
  });
  test("decode should work with empty string", () => {
    expect(AtbashCipher.decode("", aplhabetRu)).toBe("");
  });
});
