export default class OrderItem {
	constructor(
		readonly idItem: number,
		readonly price: number,
		readonly quantity: number,
		readonly density: number,
		readonly volume: number
	) {}

	getTotal() {
		return this.price * this.quantity;
	}
}
