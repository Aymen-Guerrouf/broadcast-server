import chalk from "chalk";
import yargs from "yargs";
import { startServer } from "../service/startServer.js";
import { connectToServer } from "../service/connectToServer.js";

export const broadcastServer = {
  command: "*",
  describe: "broadcast server",
  builder: (yargs) => {
    return yargs
      .option("start", {
        alias: "s",
        type: "boolean",
        description: "Start the server",
      })
      .option("connect", {
        alias: "c",
        type: "boolean",
        description: "Connect client to server",
      })
      .check((argv) => {
        if (argv.start && argv.connect) {
          throw new Error(
            chalk.red("You can't start and connect at the same time")
          );
        }
        return true;
      });
  },
  handler: (argv) => {
    if (argv.start) {
      startServer();
    } else if (argv.connect) {
      connectToServer();
    } else {
      console.log(chalk.red("You need to start or connect to the server"));
    }
  },
};
