import express from "express";

import catalogController from "../controllers/catalog.js";

const router = express.Router();

router.get("/", catalogController.getContents);

export default router;
