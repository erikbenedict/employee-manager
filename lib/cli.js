const inquirer = require("inquirer");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "initialChoices",
          message: "What would you like to do?",
          choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
          ],
        },
      ])
      .then(({ initialChoices }) => {
        // TODO: add logic to all functions
        if (initialChoices === "View All Employees") {
          return this.viewEmps();
        } else if (initialChoices === "Add Employee") {
          return this.addEmp();
        } else if (initialChoices === "Update Employee Role") {
          return this.updateEmpRole();
        } else if (initialChoices === "View All Roles") {
          return this.veiwRoles();
        } else if (initialChoices === "Add Role") {
          return this.addRole();
        } else if (initialChoices === "View All Departments") {
          return this.viewDepts();
        } else if (initialChoices === "Add Department") {
          return this.addDept();
        } else if (initialChoices === "Quit") {
          return this.quit();
        }
      });
  }
}

module.exports = CLI;
