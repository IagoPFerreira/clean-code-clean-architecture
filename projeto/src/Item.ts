export default class Item {
	constructor(
		readonly idItem: number,
		readonly description: string,
		readonly price: number,
		readonly dimensions: {
			height: number;
			length: number;
			width: number;
			weight: number;
		}
	) {
		if (
			dimensions.height <= 0 ||
			dimensions.length <= 0 ||
			dimensions.width <= 0 ||
			dimensions.weight <= 0
		) {
			throw new Error('Invalid dimensions');
		}
	}
}
