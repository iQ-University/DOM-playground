const numbers = [1, 2, 3, 4, 5, 6, 7];

const addWithOneImpure = function () {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] += 1;
    }
}

const addWithOnePure = function () {
    return numbers.map(function (element) {
        return element + 1;
    })
}

addWithOnePure();
addWithOneImpure();

console.log(numbers);

/*
    Daca am folosi exemplul urmator: 

    const addWithOneImpure = function () {
    for (let myElem of number) { 
        myElem += 1; 
        
        // => Nu s-ar produce schimbari 
        //pentru ca noi schimbam valoarea lui myElem, nu a array-ului nostru
    }
}

Pentru ca forEach nu va face mutation pe referinta care o primeste ca parametru:
'forEach() does not mutate the array on which it is called. (However, callback may do so)'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Singurul mod prin care vom putea face mutation pe array-ul numbers cu forEach:

const addWithOneImpure = function (param) {
    numbers.forEach(function (element, i) {
        numbers[i] += 2;
    })
}
*/