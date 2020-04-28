const functions = require('./functions');

test(`Add 2 + 2 equal to 4`, () => {
    expect(functions.add(2,2)).toBe(4);
})

test(`Add 2 + 2 NOT equal to 4`, () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// Check For Truthy or Falsy Values
// toBeNull
// toBeUndefined
// toBeDefined
// toBeTruthy matches anythang that an if statement treats as true
// toBeFalsy matches anythang that an if statement treats as false

test(`Returns Null`, () => {
    expect(functions.isNull()).toBeNull();
})

test(`Should not be undefined`, () => {
    // expect(functions.checkValue(null)).toBeDefined();
    expect(functions.checkValue(null)).not.toBeUndefined();
})


test(`User should be Aman Bhardwaj object`, () => {
    expect(functions.createUser()).toEqual({ firstName: 'Aman', lastName: 'Bhardwaj' });
})


test(`Should be under 2000`, () => {

    const expense1 = 1000;
    const expense2 = 1000;

    // expect(expense1 + expense2).toBeLessThan(2000);
    expect(expense1 + expense2).toBeLessThanOrEqual(2000);
})


// RegExp
test(`There should not be I in team`, () => {
    expect('team').not.toMatch(/I/i);
})

// Arrays
test('Admin must be in usernames', () => {
    const usernames = ['admin', 'john', 'ryuk'];
    expect(usernames).toContain('admin');
})

// ASYNC Data
test('Fetched user name should be Leanne Graham', async () => {
    // calls
    expect.assertions(1);

    const res = await functions.fetchUsers();

    return expect(res.data.name).toEqual('Leanne Graham');

})