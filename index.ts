import {app} from "./src/config"
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`user service running at http://localhost:${port}`);
});