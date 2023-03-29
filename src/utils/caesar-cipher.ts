const encodeCeasar = (
  text: string,
  alphabet: string[],
  shift: number
): string => {
  if (!text) return "";
  const shiftAlphabet = [...alphabet.slice(shift), ...alphabet.slice(0, shift)];
  return text.replace(/[a-z]|[а-я]/gi, (letter: string): string => {
    if (letter !== letter.toLowerCase()) {
      return shiftAlphabet[
        alphabet.indexOf(letter.toLowerCase())
      ].toUpperCase();
    }
    return shiftAlphabet[alphabet.indexOf(letter)];
  });
};

const decodeCeasar = (
  text: string,
  alphabet: string[],
  shift: number
): string => {
  if (!text) return "";
  const shiftAlphabet = [...alphabet.slice(shift), ...alphabet.slice(0, shift)];
  return text.replace(/[a-z]|[а-я]/gi, (letter: string): string => {
    if (letter !== letter.toLowerCase()) {
      return alphabet[
        shiftAlphabet.indexOf(letter.toLowerCase())
      ].toUpperCase();
    }
    return alphabet[shiftAlphabet.indexOf(letter)];
  });
};

export { encodeCeasar, decodeCeasar };
