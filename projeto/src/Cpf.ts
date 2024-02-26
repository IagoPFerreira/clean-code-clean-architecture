export default class Cpf {
	private value: string;
	constructor(value: string) {
		if (!this.validate(value)) throw new Error('Invalid CPF');
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	private validate(rawCpf: string) {
		if (!rawCpf) return false;
		if (typeof rawCpf !== 'string') return false;

		const cpf = this.cleanCpf(rawCpf);

		if (cpf.length !== 11) return false;
		if (this.hasAllDigitsEqual(cpf)) return false;

		const verifyDigit1 = this.calculateDigit(cpf, 10);
		const verifyDigit2 = this.calculateDigit(cpf, 11);

		const checkDigit = this.extractDigits(cpf);
		const calculatedDigit = `${verifyDigit1}${verifyDigit2}`;
		return checkDigit == calculatedDigit;
	}

	private cleanCpf(cpf: string) {
		return cpf.replace(/\D/g, '');
	}

	private hasAllDigitsEqual(cpf: string) {
		return cpf.split('').every((digit, _, digits) => digit === digits[0]);
	}

	private calculateDigit(cpf: string, factor: number) {
		let total = 0;
		for (const digit of cpf) {
			if (factor > 1) total += parseInt(digit) * factor--;
		}
		const rest = total % 11;
		return rest < 2 ? 0 : 11 - rest;
	}

	private extractDigits(cpf: string) {
		return cpf.substring(cpf.length - 2, cpf.length);
	}
}
