export const PagamentoVendorSDK = {
	charge(p: { amount_cents: number; token: string }): {
		status: "ok" | "fail";
		code: number;
		txid?: string;
	} {
		if (p.token === "") return { status: "fail", code: 401 };
		return { status: "ok", code: 200, txid: "tx_" + Date.now() };
	},
};
