const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/template");

const teamMembers = [];

function promptTeamMember() {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "Finish building my team"],
    },
  ]);
}

function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
  ]);
}

function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    },
  ]);
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]);
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Successfully created HTML file:", fileName);
    }
  });
}

async function main() {
  try {
    const managerAnswers = await promptManager();
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    teamMembers.push(manager);

    let shouldContinue = true;

    while (shouldContinue) {
      const { role } = await promptTeamMember();

      if (role === "Engineer") {
        const engineerAnswers = await promptEngineer();
        const engineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.github
        );
        teamMembers.push(engineer);
      } else if (role === "Intern") {
        const internAnswers = await promptIntern();
        const intern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );
        teamMembers.push(intern);
      } else {
        shouldContinue = false;
      }
    }

    const htmlContent = generateHTML(teamMembers);
    writeToFile("./dist/team.html", htmlContent);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
