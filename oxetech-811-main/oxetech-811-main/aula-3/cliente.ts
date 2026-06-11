import { Endereco } from "./endereco.js";

export class Cliente {
	constructor(
		public readonly nome: string,
		private readonly endereco: Endereco,
	) {}

	public cidadeDeEntrega(): string {
		return this.endereco.cidadeFormatada();
	}
}
