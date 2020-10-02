/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {
    //to use recursive version of loop I'll first make only one array
    let newArray = arr.flat();
    // console.log(newArray);
    //than I'll loop through the new array and add all elements together by using .pop method
    if (newArray.length === 0) {
        return 0;
    }

    return newArray.pop() + sumNestedArray(newArray);
    }




console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");