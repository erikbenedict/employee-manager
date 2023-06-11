const inquirer = require('inquirer');
const db = require('./connection');
const cTable = require('console.table');

function run() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'initialChoices',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'View All Departments',
          'Add Department',
          'Quit',
        ],
      },
    ])
    .then(({ initialChoices }) => {
      if (initialChoices === 'View All Employees') {
        viewEmps();
      } else if (initialChoices === 'Add Employee') {
        addEmp();
      } else if (initialChoices === 'Update Employee Role') {
        updateEmpRole();
      } else if (initialChoices === 'View All Roles') {
        viewRoles();
      } else if (initialChoices === 'Add Role') {
        addRole();
      } else if (initialChoices === 'View All Departments') {
        viewDepts();
      } else if (initialChoices === 'Add Department') {
        addDept();
      } else if (initialChoices === 'Quit') {
        quit();
      }
    })
    .catch((err) => {
      console.log(err);
      console.log('Oops! Something went wrong.');
    });
}

module.exports = run;
