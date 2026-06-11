// =============================================================================
// BLOCO 1 — Nomes e funções que se explicam sozinhos
// =============================================================================
// Prática (~10 min):
//   1) Renomeie identificadores ruins para revelar intenção.
//   2) Substitua os números mágicos (1, 2, 0.05, 0.1) por constantes nomeadas.
//   3) Quebre `calc` em funções pequenas, cada uma com uma responsabilidade.
//   4) Remova o flag argument `log` (separe cálculo de efeito colateral).
// =============================================================================

type CartItem = {
	name: string;
	unitPriceInCents: number;
	quantity: number;
};

enum CustomerType {
	Regular = 0,
	Silver = 1,
	Gold = 2,
}

const SILVER_DISCOUNT_RATE = 0.05;
const GOLD_DISCOUNT_RATE = 0.1;

function calculateItemTotal(item: CartItem): number {
	return item.unitPriceInCents * item.quantity;
}

function calculateSubtotal(items: CartItem[]): number {
	return items.reduce((subtotal, item) => subtotal + calculateItemTotal(item), 0);
}

function getDiscountRate(customerType: CustomerType): number {
	if (customerType === CustomerType.Silver) {
		return SILVER_DISCOUNT_RATE;
	}

	if (customerType === CustomerType.Gold) {
		return GOLD_DISCOUNT_RATE;
	}

	return 0;
}

export function calculateCartTotal(items: CartItem[], customerType: CustomerType): number {
	const subtotal = calculateSubtotal(items);
	const discountRate = getDiscountRate(customerType);
	const discount = subtotal * discountRate;
	return subtotal - discount;
}

function formatMoney(cents: number): string {
	return `R$ ${(cents / 100).toFixed(2)}`;
}

export function printReceipt(items: CartItem[], customerType: CustomerType): void {
	const subtotal = calculateSubtotal(items);
	const discountRate = getDiscountRate(customerType);
	const discount = subtotal * discountRate;
	const total = subtotal - discount;

	console.log("Subtotal: " + formatMoney(subtotal));
	console.log("Desconto: " + formatMoney(discount));
	console.log("Total:    " + formatMoney(total));
}

const cart: CartItem[] = [
	{ name: "Camiseta", unitPriceInCents: 7990, quantity: 2 },
	{ name: "Tênis", unitPriceInCents: 24990, quantity: 1 },
];

const total = calculateCartTotal(cart, CustomerType.Silver);
printReceipt(cart, CustomerType.Silver);
console.log("Total em centavos:", total);
