import Cpf from '../src/Cpf';

const validCpfs = [
  '259.556.978-37',
  '123.456.789-09',
  '147.085.437-60'
]

test.each(validCpfs)('Deve validar o CPF', (validCpf) => {
  const cpf = new Cpf(validCpf);
  expect(cpf).toBeDefined();
});

test('Deve lançar um erro se o CPF for inválido', () => {
  expect(() => new Cpf('111.440.777-35')).toThrow(new Error('Cpf inválido'));
});

test('Deve tentar validar um CPF com um tamanho menor que 11 caracteres', () => {
  expect(() => new Cpf('123.456.789')).toThrow(new Error('Cpf inválido'));
});

test('Deve tentar validar um CPF com um tamanho maior que 14 caracteres', () => {
  expect(() => new Cpf('123.456.789-1011')).toThrow(new Error('Cpf inválido'));
});

const cpfsWithSameDigit = [
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33'
]

test.each(cpfsWithSameDigit)('Deve tentar validar um CPF for com todos os dígitos iguais', (cpf) => {
  expect(() => new Cpf(cpf)).toThrow(new Error('Cpf inválido'));
});

test('Deve tentar validar um CPF com letras', () => {
  expect(() => new Cpf('abc.def.ghi-jk')).toThrow(new Error('Cpf inválido'));
});

test('Deve lançar um erro se o CPF for indefinido', () => {
  expect(() => new Cpf('')).toThrow(new Error('Cpf inválido'));
});