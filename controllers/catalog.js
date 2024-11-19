import Content from "../models/content.js";

const getContents = (req, res, next) => {
  Content.fetchAll()
    .then((contents) => {
      res.status(200).json(contents);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

const postBookmarks = (req, res, next) => {
  const contentId = req.body.contentId;
  req.user
    .addToBookmarks(contentId)
    .then((result) => {
      res.status(200).json({ message: "Bookmark added successfully", result });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export default { getContents, postBookmarks };
