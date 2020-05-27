type AccountKind = 'asset' | 'liability' | 'equity' | 'income' | 'expense';

export default interface Account {
  name: string;
  balance: number;
  kind: AccountKind;
}
