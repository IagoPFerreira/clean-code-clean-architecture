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
//86%
test('Deve retornar "false" se o CPF não for uma string', () => {
  const validCpf = cpfVerifier(`1234561891011`);
  expect(validCpf).toBe(false);
});