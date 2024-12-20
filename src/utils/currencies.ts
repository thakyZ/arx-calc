import { CurrencyType } from "./conversion";

interface Currencies {
  [key: string]: { name: string; label: string; typeName: CurrencyType };
}

const currencies: Currencies = {
  usd: { name: "USD", label: "$", typeName: "usd" },
  gbp: { name: "GBP", label: "£", typeName: "gbp" },
  eur: { name: "EUR", label: "€", typeName: "eur" },
};

export default currencies;
