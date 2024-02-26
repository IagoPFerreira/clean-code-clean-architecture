import Item from '../src/Item';
import { guitar } from './mocks/items';

test('Deve ser possível criar um Item com dimensões inválidas', () => {
	const item = new Item(
		guitar.id,
		guitar.name,
		guitar.price,
		guitar.dimensions
	);
	expect(item).toBeDefined();
});

const invalidDimensions = [
	{ height: -10, width: 30, length: 100, weight: 2 },
	{ height: 10, width: -30, length: 100, weight: 2 },
	{ height: 10, width: 30, length: -100, weight: 2 },
	{ height: 10, width: 30, length: -100, weight: -2 },
];

test.each(invalidDimensions)(
	'Não deve ser possível criar um Item com dimensões inválidas',
	(invalidDimension) => {
		expect(
			() => new Item(guitar.id, guitar.name, guitar.price, invalidDimension)
		).toThrow(new Error('Invalid dimensions'));
	}
);
