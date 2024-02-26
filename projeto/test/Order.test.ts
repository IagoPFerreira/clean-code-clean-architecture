import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';
import { amplifier, cable, guitar } from './mocks/items';

test('Não deve criar um pedido com CPF inválido', () => {
	expect(() => new Order('111.111.111-11')).toThrow(new Error('Invalid CPF'));
});

test('Deve criar um pedido com 3 itens', () => {
	const order = new Order('529.982.247-25');
	order.addItem(
		new Item(guitar.id, guitar.name, guitar.price, guitar.dimensions),
		1
	);
	order.addItem(
		new Item(
			amplifier.id,
			amplifier.name,
			amplifier.price,
			amplifier.dimensions
		),
		1
	);
	order.addItem(
		new Item(cable.id, cable.name, cable.price, cable.dimensions),
		3
	);

	const total = order.getTotal();

	expect(total).toBe(6090);
});

test('Deve criar um pedido com 3 itens com cupom de desconto', () => {
	const order = new Order('529.982.247-25');
	order.addItem(
		new Item(guitar.id, guitar.name, guitar.price, guitar.dimensions),
		1
	);
	order.addItem(
		new Item(
			amplifier.id,
			amplifier.name,
			amplifier.price,
			amplifier.dimensions
		),
		1
	);
	order.addItem(
		new Item(cable.id, cable.name, cable.price, cable.dimensions),
		3
	);
	order.addCoupon(new Coupon('VALE20', 20));

	const total = order.getTotal();

	expect(total).toBe(4872);
});

test('Não deve criar um pedido com algum item negativo', () => {
	const order = new Order('529.982.247-25');
	order.addItem(
		new Item(guitar.id, guitar.name, guitar.price, guitar.dimensions),
		1
	);
	expect(() =>
		order.addItem(
			new Item(
				amplifier.id,
				amplifier.name,
				amplifier.price,
				amplifier.dimensions
			),
			-1
		)
	).toThrow(new Error('Invalid quantity'));
	order.addItem(
		new Item(cable.id, cable.name, cable.price, cable.dimensions),
		3
	);
	order.addCoupon(new Coupon('VALE20', 20));

	const total = order.getTotal();

	expect(total).toBe(872);
});

test('Não deve criar um pedido com algum item repetido', () => {
	const order = new Order('529.982.247-25');
	order.addItem(
		new Item(guitar.id, guitar.name, guitar.price, guitar.dimensions),
		1
	);
	order.addItem(
		new Item(
			amplifier.id,
			amplifier.name,
			amplifier.price,
			amplifier.dimensions
		),
		1
	);
	expect(() =>
		order.addItem(
			new Item(
				amplifier.id,
				amplifier.name,
				amplifier.price,
				amplifier.dimensions
			),
			2
		)
	).toThrow(new Error('Already added item'));
	order.addItem(
		new Item(cable.id, cable.name, cable.price, cable.dimensions),
		3
	);
	order.addCoupon(new Coupon('VALE20', 20));

	const total = order.getTotal();

	expect(total).toBe(4872);
});
