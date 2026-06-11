import { PagamentoVendorSDK } from "./pagamento-vendor-sdk.js";

export class FalhaDePagamento extends Error {
	constructor(public readonly codigo: number) {
		super("Falha no pagamento (código " + codigo + ")");
	}
}

export interface GatewayDePagamento {
	cobrar(valorCentavos: number, token: string): string;
}

export class GatewayVendor implements GatewayDePagamento {
	public cobrar(valorCentavos: number, token: string): string {
		const resultado = PagamentoVendorSDK.charge({
			amount_cents: valorCentavos,
			token,
		});
		if (resultado.status === "fail" || resultado.txid === undefined) {
			throw new FalhaDePagamento(resultado.code);
		}
		return resultado.txid;
	}
}
