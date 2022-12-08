import OvernightFareCalculator from "../../src/v5/OvernightFareCalculator";
import NormalFareCalculator from "../../src/v5/NormalFareCalculator";
import Ride from "../../src/v5/Ride";
import SundayFareCalculator from "../../src/v5/SundayFareCalculator";
import OvernightSundayFareCalculator from "../../src/v5/OvernightSundayFareCalculator";

let ride: Ride;
beforeEach(function () {
  const normalFareCalculator = new NormalFareCalculator();
  const overnightFareCalculator = new OvernightFareCalculator(normalFareCalculator);
  const sundayFareCalculator = new SundayFareCalculator(overnightFareCalculator);
  const overnightSundayFareCalculator = new OvernightSundayFareCalculator(sundayFareCalculator);
  ride = new Ride(overnightSundayFareCalculator);
})


test('Deve calcular uma corrida em horário normal', () => {
  ride.addSegment(10, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(21);
});

test('Deve calcular uma corrida em horário noturno', () => {
  ride.addSegment(10, new Date("2021-03-10T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(39);
});

test('Deve calcular uma corrida em horário normal no domingo', () => {
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(29);
});

test('Deve calcular uma corrida em horário noturno no domingo', () => {
  ride.addSegment(10, new Date("2021-03-07T22:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(50);
});

test('Não deve calcular uma corrida com distância inválida', () => {
  expect(() => ride.addSegment(-10, new Date("2021-03-10T22:00:00"))).toThrow('Invalid distance');
});

test('Não deve calcular uma corrida com data inválida', () => {
  expect(() => ride.addSegment(10, new Date("javascript"))).toThrow('Invalid date');
});

test('Deve calcular uma corrida em horário normal com o valor mínimo', () => {
  ride.addSegment(3, new Date("2021-03-10T10:00:00"));
  const fare = ride.calculateFare();
  expect(fare).toBe(10);
});