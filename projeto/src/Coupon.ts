export default class Coupon {
	constructor(
		readonly code: string,
		readonly percentage: number,
		readonly expiration?: Date
	) {
		if (expiration && expiration.getTime() < Date.now()) {
			throw new Error('Expired coupon');
		}
	}

	calculateDiscount(total: number) {
		return (total * this.percentage) / 100;
	}
}
