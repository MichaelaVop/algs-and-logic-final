/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    //first chceck if string is empty
    if (str.length === 0) {
        return 'This is an empty string';
    }

    //make all letters small
    let lowStr = str.toLowerCase();
    //console.log(lowStr);
    //make an array from words
    let words = lowStr.split(' ');
    // console.log(words);

    //for each word make the first letter uppercase, rest lowercase
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    //join the array of joined words
    return words.join('-');
    


}

// console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

// console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

// console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

console.log(kebabCase('Coding Is Fun'));
console.log(kebabCase('this STrIng has Weird casing'));
console.log(kebabCase(''));
