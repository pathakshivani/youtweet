import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./database/index.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR:", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`✅ Server is listening on http://lacalhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Failed !!", error);
  });
