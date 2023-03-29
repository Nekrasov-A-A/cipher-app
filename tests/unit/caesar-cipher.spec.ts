import { describe, expect, test } from "@jest/globals";
import * as CeasarCipher from "@/utils/caesar-cipher";

const aplhabetEng: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const aplhabetRu: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

describe("ceasar cipher", () => {
  test("encode should work with eng alphabet", () => {
    expect(CeasarCipher.encodeCeasar("Hello World", aplhabetEng, 3)).toBe(
      "Khoor Zruog"
    );
  });
  test("encode should work with ru alphabet", () => {
    expect(CeasarCipher.encodeCeasar("Привет Мир", aplhabetRu, 3)).toBe(
      "Тулезх Плу"
    );
  });
  test("encode should work with empty string", () => {
    expect(CeasarCipher.encodeCeasar("", aplhabetRu, 3)).toBe("");
  });
  test("decode should work with eng alphabet", () => {
    expect(CeasarCipher.decodeCeasar("Khoor Zruog", aplhabetEng, 3)).toBe(
      "Hello World"
    );
  });
  test("decode should work with ru alphabet", () => {
    expect(CeasarCipher.decodeCeasar("Тулезх Плу", aplhabetRu, 3)).toBe(
      "Привет Мир"
    );
  });
  test("decode should work with empty string", () => {
    expect(CeasarCipher.decodeCeasar("", aplhabetRu, 3)).toBe("");
  });
});
