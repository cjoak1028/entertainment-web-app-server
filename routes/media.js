import express from "express";

import contentsController from "../controllers/contents.js";

const router = express.Router();

router.get("/", contentsController.getContents);

export default router;
