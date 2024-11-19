import mongodb from "mongodb";

import { getDb } from "../utils/db.js";

const ObjectId = mongodb.ObjectId;

export default class User {
  constructor(email, bookmarks = [], id) {
    this.email = email;
    this.bookmarks = bookmarks;
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToBookmarks(contentId) {
    const db = getDb();
    return db.collection("users").updateOne(
      { _id: this._id },
      { $addToSet: { bookmarks: ObjectId.createFromHexString(contentId) } } // Push the contentId into the bookmarks array
    );
  }

  removeFromBookmarks(contentId) {
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: ObjectId.createFromHexString(this._id) },
        { $pull: { bookmarks: ObjectId.createFromHexString(contentId) } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: ObjectId.createFromHexString(userId) });
  }
}
