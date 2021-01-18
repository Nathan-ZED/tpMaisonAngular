export class Ad {

  private _id: number;
  private _title: string;
  private _author: string;
  private _creationDate: string;
  private _description: string;
  private _price: string;

  constructor(title: string, author: string, creationDate: string, description: string, price: string, id?: number) {

    this._title = title;
    this._author = author;
    this._creationDate = creationDate;
    this._description = description;
    this._price = price;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get creationDate(): string {
    return this._creationDate;
  }

  set creationDate(value: string) {
    this._creationDate = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}

