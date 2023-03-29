import { describe, expect, test } from "@jest/globals";
import * as CodewordCipher from "@/utils/codeword-cipher";

const aplhabetEng: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const aplhabetRu: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

describe("codeword cipher", () => {
  test("encode should work with eng alphabet", () => {
    expect(
      CodewordCipher.encodeCodeword(
        "Hello World",
        aplhabetEng,
        "wdwdsadsadwadsa"
      )
    ).toBe("Fbjjm Vmpja");
  });
  test("encode should work with ru alphabet", () => {
    expect(
      CodewordCipher.encodeCodeword("Привет Мир", aplhabetRu, "привет")
    ).toBe("Мндитс Йдн");
  });
  test("encode should work with empty string", () => {
    expect(CodewordCipher.encodeCodeword("", aplhabetRu, "привет")).toBe("");
  });
  test("decode should work with eng alphabet", () => {
    expect(
      CodewordCipher.decodeCodeword(
        "Fbjjm Vmpja",
        aplhabetEng,
        "wdwdsadsadwadsa"
      )
    ).toBe("Hello World");
  });
  test("decode should work with ru alphabet", () => {
    expect(
      CodewordCipher.decodeCodeword("Мндитс Йдн", aplhabetRu, "привет")
    ).toBe("Привет Мир");
  });
  test("decode should work with empty string", () => {
    expect(CodewordCipher.decodeCodeword("", aplhabetRu, "привет")).toBe("");
  });
});
