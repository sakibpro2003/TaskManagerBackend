import app from "./app";
import { config } from "./config/index";

app.listen(config.port, () => {
  console.log(`server is listrning to ${config.port}`);
});
