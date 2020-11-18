const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = team => {
  const html = [];

  html.push(...team
    .filter(employee => employee.promptPosition() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...team
    .filter(employee => employee.promptPosition() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...team
    .filter(employee => employee.promptPosition() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.promptName());
  template = replacePlaceholders(template, "position", manager.promptPosition());
  template = replacePlaceholders(template, "email", manager.promptEmail());
  template = replacePlaceholders(template, "identifier", manager.promptIdentifier());
  template = replacePlaceholders(template, "officeNumber", manager.promptOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.promptName());
  template = replacePlaceholders(template, "position", engineer.promptPosition());
  template = replacePlaceholders(template, "email", engineer.promptEmail());
  template = replacePlaceholders(template, "identifier", engineer.promptIdentifier());
  template = replacePlaceholders(template, "github", engineer.promptGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.promptName());
  template = replacePlaceholders(template, "position", intern.promptPosition());
  template = replacePlaceholders(template, "email", intern.promptEmail());
  template = replacePlaceholders(template, "identifier", intern.promptIdentifier());
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