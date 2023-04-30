const availableRepos = [
  {
    category: "Frontend",
    repos: [
      {
        name: "WEB - React",
        despcription: "WEB - React Brief description",
        githubUrl: "https://github.com",
        replacements: [
          {
            name: "appName",
            type: "input",
            message: "Enter an object name for your server",
            validate: function (value) {
              if (value.length && typeof value === "string") {
                return true;
              } else {
                return "Please enter a valid app Name.";
              }
            },
          },
          {
            name: "optional",
            type: "input",
            message: "Enter an Optional Value (Optional)",
          },
        ],
      },
    ],
  },
  {
    category: "Backend",
    repos: [
      {
        name: "API - Express/Mongo",
        despcription: "API - Express/Mongo Brief description",
        githubUrl:
          "https://github.com/adriangiulianotucci/CAT-express-mongo-api.git",
        replacements: [
          {
            name: "CAT_APP_NAME",
            type: "input",
            message: "Enter an object name for your server",
            validate: function (value) {
              if (value.length && typeof value === "string") {
                return true;
              } else {
                return "Please enter a valid app Name.";
              }
            },
          },
          {
            name: "optional",
            type: "input",
            message: "Enter an Optional Value (Optional)",
          },
        ],
      },
    ],
  },
];

export default availableRepos;
