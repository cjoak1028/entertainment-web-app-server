import { getDb } from "../utils/db.js";

export default class Content {
  constructor(title, thumbnailUrl, year, category, rating, isTrending) {
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.year = year;
    this.category = category;
    this.rating = rating;
    this.isTrending = isTrending;
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("contents")
      .find()
      .toArray()
      .then((contents) => {
        console.log(contents);
        return contents;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
