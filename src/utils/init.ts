import { existsSync, mkdirSync, writeFileSync } from "fs";
import { Config } from "./config";
import * as dotenv from "dotenv";

export function init() {
  dotenv.config(); // load variables from .env file

  if (!existsSync("./settings")) {
    mkdirSync("./settings");
  }

  if (!existsSync("./settings/config.json")) {
    const config: Config = {
      license: "",
    };

    writeFileSync("./settings/config.json", JSON.stringify(config, null, 2));
  }
}
