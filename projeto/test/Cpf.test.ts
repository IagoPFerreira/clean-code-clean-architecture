import Cpf from '../src/Cpf';

describe('Casos de sucesso', () => {
	test('Deve validar o cpf válido que tem o dígito maior de zero', () => {
		const isValid = new Cpf('529.982.247-25');
		expect(isValid).toBeDefined();
	});

	test('Deve validar o cpf válido com dígito zero no primeiro dígito', () => {
		const isValid = new Cpf('198.454.187-08');
		expect(isValid).toBeDefined();
	});

	test('Deve validar o cpf válido com dígito zero no segundo dígito', () => {
		const isValid = new Cpf('147.085.437-60');
		expect(isValid).toBeDefined();
	});

	test('Deve retornar o cpf informado', () => {
		const isValid = new Cpf('147.085.437-60');
		expect(isValid).toBeDefined();
		expect(isValid.getValue()).toBe('147.085.437-60');
	});
});

describe('Casos de falha', () => {
	test('Deve tentar validar o cpf com mais de 14 caracteres', () => {
		expect(() => new Cpf('147.085.437-600')).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf com todos os dígitos iguais', () => {
		expect(() => new Cpf('111.111.111-11')).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf com letras', () => {
		expect(() => new Cpf('aaa')).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf vazio', () => {
		expect(() => new Cpf('')).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf que não for uma string', () => {
		// @ts-ignore
		expect(() => new Cpf(12345678901)).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf indefinido', () => {
		// @ts-ignore
		expect(() => new Cpf(undefined)).toThrow(new Error('Invalid CPF'));
	});

	test('Deve tentar validar o cpf nulo', () => {
		// @ts-ignore
		expect(() => new Cpf(null)).toThrow(new Error('Invalid CPF'));
	});
});
