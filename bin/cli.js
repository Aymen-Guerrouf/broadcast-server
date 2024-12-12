#!/usr/bin/env node

import yargs from "yargs";
import chalk from "chalk";
import { hideBin } from "yargs/helpers";
import { broadcastServer } from "../src/command/serverCommand.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .example("$0 broadcast-server --start", "starts the server")
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })
  .command(broadcastServer)
  .recommendCommands()
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .strict()
  .alias("help", "h")
  .alias("version", "v")
  .parse();
