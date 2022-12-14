function hasAllDigitsEqual(cpf: string) {
  const [firstDigit] = cpf;
  return cpf.split('').every((character) => character === firstDigit);
}

function isValidLenght(cpf: string) {
  return cpf.length === 11;
}

function cleanCpf(cpf: string) {
  return cpf.replace(/\D/g, "");
}

function extractDigit(cpf: string) {
  return cpf.slice(9);
}

function calculateDigit(cpf: string, factor: number) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += Number(digit) * factor--;
  }
  const rest = total % 11;

  return rest < 2 ? 0 : 11 - rest;
}

export function cpfVerifier(rawCpf: string) {
	if (!rawCpf) return false;
  if (typeof rawCpf !== 'string') return false;
  
  const cpf = cleanCpf(rawCpf);

  if (!isValidLenght(cpf)) return false;


  if (hasAllDigitsEqual(cpf)) return false;

  const digit1 = calculateDigit(cpf, 10);
  const digit2 = calculateDigit(cpf, 11);

  const inputedVerifyDigits = extractDigit(cpf);
  
  const calculatedVerifyDigits = `${digit1}${digit2}`;
  return inputedVerifyDigits === calculatedVerifyDigits;
}
