import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:3000`);
});
