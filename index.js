#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import shell from "shelljs";
import { chdir } from "node:process";

import files from "./lib/files.js";
import logo from "./lib/logo.js";

import {
  askForRepo,
  askForAppName,
  askForAppReplacements,
} from "./lib/inquirer.js";

clear();

console.log(logo);

if (files.directoryExists(".git")) {
  console.log(chalk.red("Already a Git repository!"));
  process.exit();
}

const run = async () => {
  const { selectedRepo } = await askForRepo();

  const { folderName } = await askForAppName();

  const gitCloneCommand = `git clone ${selectedRepo.githubUrl} ${folderName}`;
  const deleteGitFolderCommand = "rm -rf ./.git";

  try {
    shell.exec(gitCloneCommand);

    chdir("vegan-api");

    shell.exec(deleteGitFolderCommand);
  } catch (error) {
    chalk.red(`There was an error cloning the repo`);
    console.log(error);
  }

  if (selectedRepo.replacements) {
    const replacements = await askForAppReplacements(selectedRepo);

    for (const replacement in replacements) {
      if (Object.hasOwnProperty.call(replacements, replacement)) {
        if (replacements[replacement]) {
          try {
            shell.ls("*.js").forEach(function (file) {
              shell.sed("-i", replacement, replacements[replacement], file);
            });
          } catch (error) {
            chalk.red(`There was an error replacing variables`);
            console.log(error);
          }
        }
      }
    }
  }
};

run();
