import dotenv from "dotenv";
import { init as initDatabase } from "./infras/database";
import { startWebServer } from "./app";

dotenv.config();
initDatabase().then(() => {
  console.log(`[database]: Database is connected at ${process.env.PGHOST}:${process.env.PGPORT}`);

  const port = process.env.PORT || 3000;
  const app = startWebServer();
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});