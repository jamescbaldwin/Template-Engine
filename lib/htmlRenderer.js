const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = team => {
  const html = [];

  html.push(...team
    .filter(employee => employee.promptRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...team
    .filter(employee => employee.promptRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...team
    .filter(employee => employee.promptRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.promptName());
  template = replacePlaceholders(template, "role", manager.promptPosition());
  template = replacePlaceholders(template, "email", manager.promptEmail());
  template = replacePlaceholders(template, "id", manager.promptId());
  template = replacePlaceholders(template, "officeNumber", manager.promptOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.promptName());
  template = replacePlaceholders(template, "role", engineer.promptPosition());
  template = replacePlaceholders(template, "email", engineer.promptEmail());
  template = replacePlaceholders(template, "id", engineer.promptId());
  template = replacePlaceholders(template, "github", engineer.promptGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.promptName());
  template = replacePlaceholders(template, "role", intern.promptPosition());
  template = replacePlaceholders(template, "email", intern.promptEmail());
  template = replacePlaceholders(template, "id", intern.promptId());
  template = replacePlaceholders(template, "school", intern.promptSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;