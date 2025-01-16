import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { api } from "./api.js";

const app = express();

app.use(api);

// This code is responsible for serving the frontend files.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendFiles = path.join(__dirname, '../../dist');
app.use(express.static(frontendFiles));
app.get("/*", (_, res) => {
  res.sendFile(frontendFiles + "/index.html");
});
// end of frontend serving code

app.listen(process.env["PORT"] || 3002, () => console.log("Server started"));