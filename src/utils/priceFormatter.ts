import { currencyFormat } from 'simple-currency-format';

export function formatCurrency(price: number): string {
  return currencyFormat(price, 'ee', 'EUR', 2);
}
