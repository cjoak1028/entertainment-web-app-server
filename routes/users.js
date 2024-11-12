import express from "express";

const router = express.Router();

router.post("/bookmark", (req, res) => {
  res.send("<h1>POST BOOKMARK!</h1>");
});

export default router;
