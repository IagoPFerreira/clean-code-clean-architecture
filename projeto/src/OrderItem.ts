import Item from "./Item";

export default class OrderItem {
  constructor(readonly idItem: number, readonly itemPrice: number, readonly quantity: number) { }

  getTotal() {
    return this.itemPrice * this.quantity;
  }
}