export class Product{
  private _product:string;

  constructor(product: string) {
    this._product = product;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }
}
