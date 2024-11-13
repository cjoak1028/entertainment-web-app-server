import Content from "../models/content.js";

const getContents = (req, res, next) => {
  Content.fetchAll()
    .then((contents) => {
      console.log(contents);
      res.json(contents);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

export default { getContents };
