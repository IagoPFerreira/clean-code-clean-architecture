import Coupon from '../src/Coupon';

describe('Casos de sucesso', () => {
	test('Deve ser possível criar um cupom', () => {
		const coupon = new Coupon('VALE20', 20, new Date('2030-10-10'));
		expect(coupon).toBeDefined();
	});

	test('Deve retornar o valor com desconto', () => {
		const coupon = new Coupon('VALE20', 20, new Date('2030-10-10'));
		expect(coupon.calculateDiscount(500)).toBe(100);
	});
});

describe('Casos de falha', () => {
	test('Não deve ser possível criar um cupom expirado', () => {
		expect(() => new Coupon('VALE20', 20, new Date('2020-10-10'))).toThrow(
			new Error('Expired coupon')
		);
	});
});
