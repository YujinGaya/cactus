import Account from './Account';

export default interface Ledger {
  name: string;
  accounts: {
    [key: string]: Account;
  };
}
