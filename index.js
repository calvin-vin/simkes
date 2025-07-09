import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

if (!fs.existsSync("./logs")) {
  fs.mkdirSync("./logs", { recursive: true });
}

app.listen(PORT, () => {
  console.log(`API ready at http://localhost:${PORT}/api`);
});
