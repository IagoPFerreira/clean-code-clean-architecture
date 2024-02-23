function hasAllDigitsEqual(cpf: string) {
	return cpf.split('').every((digit, _, digits) => digit === digits[0]);
}

function cleanCpf(cpf: string) {
	return cpf.replace(/\D/g, '');
}

function extractDigits(cpf: string) {
	return cpf.substring(cpf.length - 2, cpf.length);
}

function calculateDigit(cpf: string, factor: number) {
	let total = 0;
	for (const digit of cpf) {
		if (factor > 1) total += parseInt(digit) * factor--;
	}
	const rest = total % 11;
	return rest < 2 ? 0 : 11 - rest;
}

export function validate(rawCpf: string) {
	if (!rawCpf) return false;
	if (typeof rawCpf !== 'string') return false;

	const cpf = cleanCpf(rawCpf);

	if (cpf.length !== 11) return false;
	if (hasAllDigitsEqual(cpf)) return false;

	const verifyDigit1 = calculateDigit(cpf, 10);
	const verifyDigit2 = calculateDigit(cpf, 11);

	const checkDigit = extractDigits(cpf);
	const calculatedDigit = `${verifyDigit1}${verifyDigit2}`;
	return checkDigit == calculatedDigit;
}
