export class Image {
  constructor(data) {
    this.url = data.largeImgUrl;
    this.tags = data.tags;
    this.author = data.author;
  }
}
