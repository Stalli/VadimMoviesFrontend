export class Movie {
  title: string;
  id: number;
  year: number;
  image: string;

  constructor(title: string, id: number, year: number, image: string) {
    this.title = title;
    this.id = id;
    this.year = year;
    this.image = image;
  }
}
