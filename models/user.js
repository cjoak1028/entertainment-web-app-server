import mongodb from "mongodb";

import { getDb } from "../utils/db.js";

const ObjectId = mongodb.ObjectId;

export default class User {
  constructor(email, bookmarks) {
    this.email = email;
    this.bookmarks = bookmarks;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToBookmarks(content) {}

  removeFromBookmarks(contentId) {}

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: ObjectId.createFromHexString(userId) });
  }
}
