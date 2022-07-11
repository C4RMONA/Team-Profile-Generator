const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern')
const generateHTML = require('../src/page-template')

class Team {
    constructor() {
        this.team = [];
    }

    getTeam() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'teamConfirm',
                message: 'Would you like to create a team profile?'
            }
        ]).then((answer) => {

            if (answer.teamConfirm) {
                this.addTeamEmployee('Manager')
            }
            else {
                console.log('no team created');
            }
        });
    }

    addTeamEmployee(role) {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: 'Please enter ' + role + "'s role."
            },

            {
                type: 'number',
                name: 'id',
                message: 'Please enter ' + role + "'s ID number."
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter' + role + "'s email."
            }

        ]).then((employeeAnswer) => {

            if (role == 'Manager') {
                inquirer.prompt([
                    {
                        type: 'number',
                        name: 'office',
                        message: "Please enter Manager's office number."
                    }
                ])
                    .then((managerAnswer) => {
                        this.team.push(new Manager(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, managerAnswer.office));

                        inquirer.prompt([
                            {
                                type: 'list',
                                name: 'choice',
                                message: 'Add another team member?',
                                choices: ['Engineer', 'Intern', 'No']
                            }
                        ]).then((answer) => {

                            if (answer.choice == 'Engineer') {
                                this.addTeamEmployee('Engineer');
                            }

                            else if (answer.choice == 'Intern') {
                                this.addTeamEmployee('Intern')
                            }

                            else {
                                this.generateHTML();
                            }
                        });
                    })
            }

            else if (role == 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "Please Enter Engineer's GitHub username."
                    }
                ]).then((engineerAnswer) => {
                    this.team.push(new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, engineerAnswer.github));

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'choice',
                            message: 'Add another team member?',
                            choices: ['Engineer', "Intern", 'No']
                        }
                    ]).then((answer) => {

                        if (answer.choice == 'Engineer') {
                            this.addTeamEmployee('Engineer');
                        }

                        else if (answer.choice == 'Intern') {
                            this.addTeamEmployee('Intern')
                        }

                        else {
                            this.generateHTML();
                        }
                    });
            
                });
            }

            else {
                inquirer.prompt ([
                    {
                    type: 'input',
                    name: 'school',
                    message: "Please enter Intern'school?"
                    }
                ]).then((internAnswer) => {
                    this.team.push(new Intern(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, internAnswer.school));

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'choice',
                            message: 'Add another team member?',
                            choices: ['Engineer', "Intern", 'No']
                        }
                    ]).then((answer) => {

                        if (answer.choice == 'Engineer') {
                            this.addTeamEmployee('Engineer');
                        }

                        else if (answer.choice == 'Intern') {
                            this.addTeamEmployee('Intern')
                        }

                        else {
                            // this.generateHTML();
                        }
                    });
                });
            }
        })
    }
}
    module.exports = Team;