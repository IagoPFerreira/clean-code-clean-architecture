import { calculateRide } from "../../src/v2/calculateRide";
// 58%
test('Deve calcular uma corrida em horário normal', () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-10T10:00:00") }]);
  expect(fare).toBe(21);
});
// 70%
test('Deve calcular uma corrida em horário noturno', () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-10T22:00:00") }]);
  expect(fare).toBe(39);
});
// 76%
test('Deve calcular uma corrida em horário normal no domingo', () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-07T10:00:00") }]);
  expect(fare).toBe(29);
});
// 82%
test('Deve calcular uma corrida em horário noturno no domingo', () => {
  const fare = calculateRide([{ distance: 10, date: new Date("2021-03-07T22:00:00") }]);
  expect(fare).toBe(50);
});
// 88%
test('Não deve calcular uma corrida com distância inválida', () => {
  expect(() => calculateRide([{ distance: -10, date: new Date("2021-03-10T22:00:00") }])).toThrow('Invalid distance');
});
// 94%
test('Não deve calcular uma corrida com data inválida', () => {
  expect(() => calculateRide([{ distance: 10, date: new Date("javascript") }])).toThrow('Invalid date');
});
// 100%
test('Deve calcular uma corrida em horário normal com o valor mínimo', () => {
  const fare = calculateRide([{ distance: 3, date: new Date("2021-03-10T10:00:00") }]);
  expect(fare).toBe(10);
});