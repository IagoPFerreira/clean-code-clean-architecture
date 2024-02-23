import { validate } from '../src/validate';

test('Deve validar o cpf válido que tem o dígito maior de zero', () => {
	const isValid = validate('529.982.247-25');
	expect(isValid).toBeTruthy();
});

test('Deve validar o cpf válido com dígito zero no primeiro dígito', () => {
	const isValid = validate('198.454.187-08');
	expect(isValid).toBeTruthy();
});

test('Deve validar o cpf válido com dígito zero no segundo dígito', () => {
	const isValid = validate('147.085.437-60');
	expect(isValid).toBeTruthy();
});

test('Deve tentar validar o cpf com mais de 14 caracteres', () => {
	const isValid = validate('147.085.437-600');
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf com todos os dígitos iguais', () => {
	const isValid = validate('111.111.111-11');
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf com letras', () => {
	const isValid = validate('aaa');
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf vazio', () => {
	const isValid = validate('');
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf que não for uma string', () => {
	// @ts-ignore
	const isValid = validate(12345678901);
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf indefinido', () => {
	// @ts-ignore
	const isValid = validate(undefined);
	expect(isValid).toBeFalsy();
});

test('Deve tentar validar o cpf nulo', () => {
	// @ts-ignore
	const isValid = validate(null);
	expect(isValid).toBeFalsy();
});
