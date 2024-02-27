interface Dimensions {
	height: number;
	length: number;
	width: number;
	weight: number;
}

export default class Item {
	constructor(
		readonly idItem: number,
		readonly description: string,
		readonly price: number,
		readonly dimensions: Dimensions
	) {
		if (!this.validDimensions(dimensions)) {
			throw new Error('Invalid dimensions');
		}
	}

	validDimensions(dimensions: Dimensions): boolean {
		return !Object.values(dimensions).some((value) => value <= 0);
	}

	getVolume() {
		return (
			(this.dimensions.height *
				this.dimensions.length *
				this.dimensions.width) /
			1000
		);
	}

	getDensity() {
		return this.dimensions.weight / this.getVolume();
	}
}
