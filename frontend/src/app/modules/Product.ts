export class Product{
  private _name:string;

  constructor(product: string) {
    this._name = product;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
