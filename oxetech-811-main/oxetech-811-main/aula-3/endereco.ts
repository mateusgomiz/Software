export class Endereco {
	constructor(
		private readonly rua: string,
		private readonly cidade: string,
		private readonly uf: string,
	) {}

	public cidadeFormatada(): string {
		return this.cidade + "/" + this.uf;
	}
}
