import { validate } from './validate';

export default class Order {
	constructor(cpf: string) {
		if (!validate(cpf)) throw new Error('Invalid CPF');
	}
}
