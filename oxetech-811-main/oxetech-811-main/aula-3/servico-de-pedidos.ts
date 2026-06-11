import { GatewayDePagamento } from "./gateway.js";
import { Cliente } from "./cliente.js";
import { Pedido } from "./pedido.js";

export class ServicoDePedidos {
	constructor(private readonly gateway: GatewayDePagamento) {}

	public processar(cliente: Cliente, totalCentavos: number, token: string): Pedido {
		console.log("Entrega para " + cliente.cidadeDeEntrega());
		const txid = this.gateway.cobrar(totalCentavos, token);
		console.log("E-mail enviado para " + cliente.nome);
		return { clienteNome: cliente.nome, totalCentavos, txid };
	}
}
