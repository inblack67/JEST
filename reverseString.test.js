const reverseString = require('./reverseString');

test('reverseString Function Exists', () => {
    expect(reverseString).toBeDefined();
});

test('String Reverses', () => {
    // expect(reverseString('hello')).toBe('olleh');
    // expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('Hello')).toEqual('olleh');
});

