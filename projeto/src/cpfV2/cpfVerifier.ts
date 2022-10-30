export function cpfVerifier(cpf: string) {
	if (!cpf) return false;
  if (typeof cpf !== 'string') return false;
  if (cpf.length < 11 || cpf.length > 14) return false;

  cpf = cpf.replace('.', '').replace('.', '').replace('-', '').replace(' ', '');

  if (cpf.split('').every((character) => character === cpf[0])) return false;
    let firstTenDigitsAccumulator, firstElevenDigitsAccumulator;
    let verifierDigit1, verifierDigit2, rest;
    let currentCpfDigit;
    let calculatedVerifyDigits;
    firstTenDigitsAccumulator = firstElevenDigitsAccumulator = 0;
    verifierDigit1 = verifierDigit2 = rest = 0;

  for (let currentPosition = 1; currentPosition < cpf.length - 1; currentPosition++) {
    currentCpfDigit = parseInt(cpf.substring(currentPosition - 1, currentPosition));
    firstTenDigitsAccumulator += (11 - currentPosition) * currentCpfDigit;
    firstElevenDigitsAccumulator += (12 - currentPosition) * currentCpfDigit;
  }

  rest = firstTenDigitsAccumulator % 11;
  verifierDigit1 = rest < 2 ? (verifierDigit1 = 0) : 11 - rest;
  firstElevenDigitsAccumulator += 2 * verifierDigit1;
  rest = firstElevenDigitsAccumulator % 11;
  verifierDigit2 = rest < 2 ? 0 : (11 - rest);

  const inputedVerifyDigits = cpf.substring(cpf.length - 2, cpf.length);
  
  calculatedVerifyDigits = '' + verifierDigit1 + '' + verifierDigit2;
  return inputedVerifyDigits === calculatedVerifyDigits;
}
