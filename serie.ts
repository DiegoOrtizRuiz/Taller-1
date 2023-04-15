export class Serie {
    id: number;
    name: string;
    producer: string;
    seasons: number;
    review: string;
    url: string;
    image: string;
  
    constructor(id: number, name: string, producer: string, seasons: number, review: string, url: string, image: string) {
      this.id = id;
      this.name = name;
      this.producer = producer;
      this.seasons = seasons;
      this.review = review;
      this.url = url;
      this.image = image;
    }
  }
    