export interface IFilms {
  id: number;
  name: string;
  country: string;
  type: string;
  age: number;
  image: string;
  description: string;
  author: string;
  idState: number;
}

export interface ISales {
  id: number;
  name: string;
  age: string;
  sale: number;
  description: string;
}

export interface IState {
  id: number;
  text: string;
}

export interface ISeances {
  id: number;
  time: Date;
  idHall: number;
}

export interface IHalls {
  id: number;
  seats: ISeats[][];
}

export interface ISeats {
  id: number;
  price: number;
  isBook: boolean;
}