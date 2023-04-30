import inquirer from "inquirer";

import availableRepos from "../utils/repos.js";

export const askForRepo = () => {
  const options = [];

  availableRepos.forEach((elem) => {
    options.push(new inquirer.Separator(elem.category));
    elem.repos.forEach((elem) =>
      options.push({ name: `${elem.name}. ${elem.despcription}`, value: elem })
    );
  });

  const questions = [
    {
      name: "selectedRepo",
      type: "list",
      message: "Select the tool you want to create",
      choices: options,
      validate: function (value) {
        if (value.length && typeof value === "string") {
          return true;
        } else {
          return "Please enter a valid app Name.";
        }
      },
    },
  ];

  return inquirer.prompt(questions);
};

export const askForAppName = () => {
  const questions = [
    {
      name: "folderName",
      type: "input",
      message: "Enter your folder name",
      validate: function (value) {
        if (value.indexOf(" ") >= 0) {
          return "Your app name can't have whitespaces";
        }
        if (value.length && typeof value === "string") {
          return true;
        } else {
          return "Please enter a valid app Name.";
        }
      },
    },
  ];

  return inquirer.prompt(questions);
};

export const askForAppReplacements = (repo) => {
  const { replacements } = repo;

  return inquirer.prompt(replacements);
};
