import express from "express";

import catalogController from "../controllers/catalog.js";

const router = express.Router();

router.get("/", catalogController.getContents);

router.get("/bookmarks", catalogController.getBookmarks);

router.post("/bookmarks", catalogController.postBookmarks);

export default router;
