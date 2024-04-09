import app from "./config/server";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(process.env.SERVER_PORT || 3000, () =>
  console.log(`listening from port ${process.env.PORT || 3000}`)
);
