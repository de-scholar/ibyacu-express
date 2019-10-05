import express from "express";
import "dotenv/config";
import urlControllers from "./controllers/urlControllers";

const app = new express();
const port = process.env.PORT;

urlControllers(app);

app.listen(port, () => {
  console.log("Ibyacu app is running listening on port : " + port);
});
