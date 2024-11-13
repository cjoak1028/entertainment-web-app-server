import Content from "../models/content.js";

const getContents = (req, res, next) => {
  Content.fetchAll()
    .then((contents) => {
      res.json(contents);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export default { getContents };
