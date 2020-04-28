const chunkArray = require('./chunkArray');


test('reverseString Function Exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk Array of 10 with the length of 2', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const length = 2;
    const chunks = chunkArray(numbers, length);
    
    expect(chunks).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]);
} )