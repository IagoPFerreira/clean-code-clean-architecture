import Coupon from '../src/Coupon';

test('Não deve ser possível criar um cupom expirado', () => {
	expect(() => new Coupon('VALE20', 20, new Date('2020-10-10'))).toThrow(
		new Error('Expired coupon')
	);
});

test('Deve ser possível criar um cupom', () => {
	const coupon = new Coupon('VALE20', 20, new Date('2030-10-10'));
	expect(coupon).toBeDefined();
});
