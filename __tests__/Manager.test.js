const Manager = require('../lib/Manager');

describe('manager', () => {
    test('testing to get name of manager', () => {
        const manager = new Manager('name', 'id', 'email');

        expect(manager.getName()).toBe('name');
    });
    
    test('testing to get id', () => {
        const manager = new Manager('name', 9562012, 'email');

        expect(manager.getId()).toBe(9562012);
    });

    test('testing to get email', () => {
        const manager = new Manager('name', 'id', 'email');

        expect(manager.getEmail()).toBe('email');
    });

    test('testing to getRole', () => {
        const manager = new Manager('name', 'id', 'email');
        
        expect(manager.getRole()).toBe('manager');
    })
});