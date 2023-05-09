class FinanceAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  // getBalance() {
  //   console.log(`My current balance : ${this._balance}`);
  // }

  // ? Getter

  get getBalance(): number {
    return this._balance;
  }

  // getDeposit(amount: number) {
  //   this._balance = this._balance + amount;
  // }

  // ? Setter

  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const PersonalAccount = new FinanceAccount(1, "Tonmoy", 1000);

console.log(PersonalAccount.getBalance);

PersonalAccount.deposit = 500;

console.log(PersonalAccount.getBalance);
