const numbers = [1, 2, 3, 4, 5, 6, 7];

// Impure

const addWithOneImpureWithFor = function (inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] += 1;
    }
}

/*
* forEach() does not mutate the array on which it is called. (However, callback may do so)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

const addWithOneImpureWithForEach = function (inputArray) {
    inputArray.forEach(function (element, index, array) {
        array[index] += 1;
    })
}

// Pure


const addWithOnePureWithMap = function (inputArray) {
    return inputArray.map(function (element) {
        return element + 1;
    })
}

const addWithOnePureWithForEach = function (inputArray) {
    const result = [];
    inputArray.forEach(function (element) {
        result.push(element + 1);
    })

    return result;
}

const addWithOnePureWithFor = function (inputArray) {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        result.push(inputArray[i] + 1);
    }

    return result;
}


// returneaza un array :

const resultFromMap = addWithOnePureWithMap(numbers);
console.log(resultFromMap, 'new array from map');

const resultFromForEach = addWithOnePureWithForEach(numbers);
console.log(resultFromForEach, 'new array from forEach');

const resultFromFor = addWithOnePureWithFor(numbers);
console.log(resultFromFor, 'new array from for');

console.log(numbers, 'orginal array remains the same!');

addWithOneImpureWithFor(numbers);
console.log(numbers, 'orginal array is mutated!');

addWithOneImpureWithForEach(numbers);
console.log(numbers, 'orginal array is mutated again!');


// De ce nu a mers in exemplul cu for of: 

const addWithOneImpureWithForOf = function (array) {
    for (let myElem of array) {
        myElem += 1;
    }
}
/*
=> Nu s-ar produce schimbari in array-ul numbers
pentru ca noi schimbam valoarea variabilei block scoped myElem, nu al array-ului primit ca si argument
*/
