import { cpfVerifier } from "../../src/cpfV2/cpfVerifier"
//80%
test('Deve retornar "true" se o CPF for válido', () => {
  const validCpf = cpfVerifier('111.444.777-35');
  expect(validCpf).toBe(true);
});
//83%
test('Deve retornar "false" se o CPF for inválido', () => {
  const validCpf = cpfVerifier('111.440.777-35');
  expect(validCpf).toBe(false);
});
//86%
test('Deve retornar "false" se o CPF tiver um tamanho menor que 11 caracteres', () => {
  const validCpf = cpfVerifier('123.456.789');
  expect(validCpf).toBe(false);
});
//86%
test('Deve retornar "false" se o CPF tiver um tamanho maior que 11 caracteres', () => {
  const validCpf = cpfVerifier('123.456.789-1011');
  expect(validCpf).toBe(false);
});
//93%
test('Deve retornar "false" se o CPF for composto de um só dígito', () => {
  const validCpf = cpfVerifier('111.111.111-11');
  expect(validCpf).toBe(false);
});
//96%
test('Deve retornar "false" se o CPF for uma string vazia', () => {
  const validCpf = cpfVerifier('');
  expect(validCpf).toBe(false);
});
//96%
test('Deve retornar "false" se o CPF for uma string vazia', () => {
  const validCpf = cpfVerifier(123 as unknown as string);
  expect(validCpf).toBe(false);
});
//100%
test('Deve retornar "true" se o CPF for válido com o primeiro dígito 0', () => {
  const validCpf = cpfVerifier('123.456.789-09');
  expect(validCpf).toBe(true);
});

test('Deve retornar "true" se o CPF for válido com o segundo dígito 0', () => {
  const validCpf = cpfVerifier('147.085.437-60');
  expect(validCpf).toBe(true);
});