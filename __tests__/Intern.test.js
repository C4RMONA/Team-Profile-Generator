const Intern = require('../lib/Intern');

describe('intern', () => {
    test('testing to get name of intern', () => {
        const intern = new Intern('name', 'id', 'email');

        expect(intern.getName()).toBe('name');
    });
    
    test('testing to get id', () => {
        const intern = new Intern('name', 9562012, 'email');

        expect(intern.getId()).toBe(9562012);
    });

    test('testing to get email', () => {
        const intern = new Intern('name', 'id', 'email');

        expect(intern.getEmail()).toBe('email');
    });

    test('testing to getRole', () => {
        const intern = new Intern('name', 'id', 'email');
        
        expect(intern.getRole()).toBe('intern');
    })
});