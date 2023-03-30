import { describe, expect, test } from "@jest/globals";
import * as RailFenceCipher from "@/utils/rail-fence-cipher";

describe("codeword cipher", () => {
  test("encode should work with eng alphabet", () => {
    expect(RailFenceCipher.encode("Hello World", 3)).toBe("HolelWrdlo");
  });
  test("encode should work with ru alphabet", () => {
    expect(RailFenceCipher.encode("Привет Мир", 3)).toBe("ПеррвтииМ");
  });
  test("encode should work with empty string", () => {
    expect(RailFenceCipher.encode("", 3)).toBe("");
  });
  test("decode should work with eng alphabet", () => {
    expect(RailFenceCipher.decode("HolelWrdlo", 3)).toBe("HelloWorld");
  });
  test("decode should work with ru alphabet", () => {
    expect(RailFenceCipher.decode("ПеррвтииМ", 3)).toBe("ПриветМир");
  });
  test("decode should work with empty string", () => {
    expect(RailFenceCipher.decode("", 3)).toBe("");
  });
});
