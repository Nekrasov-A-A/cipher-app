const encode = (text: string, alphabet: string[], codeword: string): string => {
  if (!text) return "";
  const uniqueLettersOfCodeword: string[] = [
    ...new Set(codeword.toLowerCase()),
  ];
  const codewordAlphabet: string[] = [
    ...new Set([...uniqueLettersOfCodeword, ...alphabet]),
  ];
  return text.replace(/[a-z]|[а-я]/gi, (letter: string): string => {
    if (letter !== letter.toLowerCase()) {
      return codewordAlphabet[
        alphabet.indexOf(letter.toLowerCase())
      ].toUpperCase();
    }
    return codewordAlphabet[alphabet.indexOf(letter)];
  });
};

const decode = (text: string, alphabet: string[], codeword: string): string => {
  if (!text) return "";
  const uniqueLettersOfCodeword: string[] = [
    ...new Set(codeword.toLowerCase()),
  ];
  const codewordAlphabet: string[] = [
    ...new Set([...uniqueLettersOfCodeword, ...alphabet]),
  ];
  return text.replace(/[a-z]|[а-я]/gi, (letter: string): string => {
    if (letter !== letter.toLowerCase()) {
      return alphabet[
        codewordAlphabet.indexOf(letter.toLowerCase())
      ].toUpperCase();
    }
    return alphabet[codewordAlphabet.indexOf(letter)];
  });
};

export { encode, decode };
