import Coupon from './Coupon';
import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon?: Coupon;

	constructor(cpf: string) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
	}

	addItem(item: Item, quantity: number) {
		if (quantity <= 0) {
			throw new Error('Invalid quantity');
		}
		if (this.orderItems.some((orderItem) => orderItem.idItem === item.idItem)) {
			throw new Error('Already added item');
		}
		this.orderItems.push(
			new OrderItem(
				item.idItem,
				item.price,
				quantity,
				item.getDensity(),
				item.getVolume()
			)
		);
	}

	addCoupon(coupon: Coupon) {
		this.coupon = coupon;
	}

	getTotal() {
		let total = this.orderItems.reduce(
			(acc, orderItem) => (acc += orderItem.getTotal()),
			0
		);
		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total);
		}

		return total;
	}

	getFreight() {
		let total = this.orderItems.reduce(
			(acc, orderItem) =>
				(acc += 1000 * orderItem.volume * (orderItem.density / 100)),
			0
		);

		return total > 10 ? total : 10;
	}
}
