const Employee = require('../lib/Employee')

describe('employee', () => {
    test('testing to get name of employee', () => {
        const employee = new Employee('name', 'id', 'email');

        expect(employee.getName()).toBe('name');
    });
    
    test('testing to get id', () => {
        const employee = new Employee('name', 9562012, 'email');

        expect(employee.getId()).toBe(9562012);
    });

    test('testing to get email', () => {
        const employee = new Employee('name', 'id', 'email');

        expect(employee.getEmail()).toBe('email');
    });

    test('testing to getRole', () => {
        const employee = new Employee('name', 'id', 'email');
        
        expect(employee.getRole()).toBe('employee');
    })
});