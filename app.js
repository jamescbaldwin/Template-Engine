// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const fs = require("fs");

const team = []

function buildTeam () {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select a position to add to the Team",
            name: "userPosition",
            choices: ["Intern", "Engineer", "Manager", "All Positions Added"]
        }
    ]).then(response => {
        switch (response.userPosition) {
            case "Intern":
                createIntern();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Manager":
                createManager();
                break;
            case "All Positions Added":
                console.log("Thank you for your interest in the JAMESteam, but unfortunately all positions have been filled");
                escapeLoop();
                break;
            }
        })
}

function escapeLoop() {
    var output = render(team);
    fs.writeFileSync("./output/index.html", output, function (err) {
        if (err) {
            throw err
        }
    })
}

function createIntern() {
    inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "Please enter your first name"
        },
        {
        type: "input",
        name: "internIdentifier",
        message: "Please enter your identification number"
        },
        {
        type: "input",
        name: "internEmail",
        message: "Please enter your email address"
        },
        {
        type: "input",
        name: "internSchool",
        message: "Please enter your Alma Mater"
        }
    ]).then(response => {
        console.log(response);
        const intern = new Intern (response.internName, response.internId, response.internEmail, response.internSchool)
        team.push(intern)
        buildTeam();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        message: "Please enter your first name"
        },
        {
        type: "input",
        name: "engineerIdentifier",
        message: "Please enter your identification number"
        },
        {
        type: "input",
        name: "engineerEmail",
        message: "Please enter your email address"
        },
        {
        type: "input",
        name: "engineerGithub",
        message: "Please enter your GitHub username"
        }
    ]).then(response => {
        console.log(response);
        const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        team.push(engineer)
        buildTeam();
    })
}

function createManager() {
    inquirer.prompt([
        {
        type: "input",
        name: "managerName",
        message: "Please enter your first name"
        },
        {
        type: "input",
        name: "managerIdentifier",
        message: "Please enter your identification number"
        },
        {
        type: "input",
        name: "managerEmail",
        message: "Please enter your email address"
        },
        {
        type: "input",
        name: "managerOffice",
        message: "Please enter your designated office number"
        }
    ]).then(response => {
        console.log(response);
        const manager = new Manager (response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        team.push(manager)
        buildTeam();
    })
}

module.exports = team

buildTeam();
