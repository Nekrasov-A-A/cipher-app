const AtbashCipher = (text: string, alphabet: string[]): string => {
  if (!text) return "";
  const alphabetReverse: string[] = [...alphabet].reverse();
  return text.replace(/[a-z]|[а-я]/gi, (current): string => {
    if (current !== current.toLowerCase()) {
      return alphabetReverse[
        alphabet.indexOf(current.toLowerCase())
      ].toUpperCase();
    }
    return alphabetReverse[alphabet.indexOf(current)];
  });
};

export default AtbashCipher;
