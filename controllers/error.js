import path from "path";
import { fileURLToPath } from "url";

// Define dirname for es module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const get404 = (req, res, next) => {
  console.log(__filename);
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));
};

export default { get404 };
