'use strict';
const products = require('./products.interface');
const cart = require('./cart.interface');

class Test {
	constructor () {
		this.productNamePrice = []
	}

	getProductsWithMimimumFields() {
		this.productNamePrice = products.map(product => { return { productName: product.productName, productPrice: product.productPrice } });
	}

	leastPriceWithThisName(name) {
		return this.productNamePrice.filter(product => product.productName === name).reduce((a, b) => a.productPrice < b.productPrice ? a : b)
	}

	extractTotalQuantityOfCartItems() {
		return cart.reduce((sum, cartItem) => {
			return sum + cartItem.quantity;
		}, 0);
	}

	extractCartItemWithMimimumPrice() {
		return cart.reduce((a, b) => a.basePrice < b.basePrice ? a : b)
	}

	extractCartItemWithMaximumPrice() {
		return cart.reduce((a, b) => a.basePrice > b.basePrice ? a : b)
	}

	calculateTotalPriceOfCart() {
		return cart.reduce((sum, cartItem) => {
			return sum + cartItem.discountedPrice;
		}, 0);
	}

}

// Do not edit below this line
const test = new Test();

test.getProductsWithMimimumFields();
console.log(test.productNamePrice);
console.log("Product with Least Price From Products => ", test.leastPriceWithThisName("Stamps and Flower - Sage"))
console.log("Total Quantity of items in cart => ", test.extractTotalQuantityOfCartItems())
console.log("Product with Least Price from cart => ", test.extractCartItemWithMimimumPrice());
console.log("Product with Max Price from cart => ", test.extractCartItemWithMaximumPrice());
console.log("Total Cart Price of Cart => ", test.calculateTotalPriceOfCart());