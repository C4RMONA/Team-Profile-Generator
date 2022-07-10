const Engineer = require('../lib/Engineer');

describe('engineer', () => {
    test('testing to get name of engineer', () => {
        const engineer = new Engineer('name', 'id', 'email');

        expect(engineer.getName()).toBe('name');
    });
    
    test('testing to get id', () => {
        const engineer = new Engineer('name', 9562012, 'email');

        expect(engineer.getId()).toBe(9562012);
    });

    test('testing to get email', () => {
        const engineer = new Engineer('name', 'id', 'email');

        expect(engineer.getEmail()).toBe('email');
    });

    test('testing to getRole', () => {
        const engineer = new Engineer('name', 'id', 'email');
        
        expect(engineer.getRole()).toBe('engineer');
    })
});