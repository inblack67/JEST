const isAnagram = require('./anagram');


test('isAnagram function exists', () =>{
    expect(typeof isAnagram).toEqual('function');
    // expect(isAnagram).toBeDefined();
})


test('cinema is an anagram of iceman', () =>{
    // expect(isAnagram('cinema', 'iceman')).toEqual(true);
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
})

test('dormitory dirty room', () =>{
    expect(isAnagram('dormitory', 'dirty room')).toBeTruthy();

})
test('cinema is an anagram of iceman', () =>{
    expect(isAnagram('cinema', 'icemann')).toBeFalsy();
})
