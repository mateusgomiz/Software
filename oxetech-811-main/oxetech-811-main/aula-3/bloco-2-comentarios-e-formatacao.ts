// TypeScript

export class User {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly age: number
	) {}

	public isAdult(): boolean {
		return this.age >= 18;
	}
}

export const add = (a: number, b: number): number => a + b;

// Testes no console
console.log(new User("u1", "Mateus", 25).isAdult()); // true
console.log(add(2, 3)); // 5
