// // document location methods

// let fname = document.getElementById('fname');
// let fname3 = document.getElementsByClassName('first-name')[0];
// let fname4 = document.getElementsByTagName('input')[0];
// let fname5 = document.getElementsByName('fname')[0];
// let fname2 = document.querySelector('#fname');
// let fname6 = document.querySelectorAll('.fname')[0];

// // console.log(fname, fname2, fname3, fname4, fname5, fname6);


// // create a submit button using appendChild
// const submitBtn = document.createElement('input');
// submitBtn.setAttribute('type', 'submit');
// submitBtn.setAttribute('value', 'Click me!!!!!!!');

// const form = document.querySelector('form');

// form.appendChild(submitBtn);

// // append a text node using append
// const newDiv = document.createElement('div');
// newDiv.append('New text 2'); //Good

// submitBtn.addEventListener('click', () => {
// //...
// })

//  submitBtn.setAttribute('onclick', 'handler(event)');

// submitBtn.onclick = function($event) {
//     $event.preventDefault();
//     console.log("it works");
// }


// // bubbling and capturing

// const allMyElements = document.querySelectorAll('input, form, body');

// for (let i = 0; i < allMyElements.length; i++) {
//     allMyElements[i].addEventListener('click', ($event) => {
//         // $event.stopPropagation();
//         // $event.cancelBubble = true
//         console.log("TARGET", $event.target)
//         console.log("CURRENT TARGET", $event.currentTarget);
//         console.log('test');
//     }, /*true (set for event capturing)*/ )
// }

// // const myHandle = () => {
// //     console.log('do Something')
// // }

// myElement.addEventListener('click', myHandle)
// myElement.removeEventListener('click', myHandler)

//Useful reading
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

// ------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7];

// to do:
// multiply by 2 all the elements bigger or equal to 4 and display the sum

// for (let i = 0; i < numbers.length; i++) {
//   //...
// }

// for (let element of numbers) {
//   console.log(element);
// }

// foreach()

// numbers.forEach(function(element, i) {
//   console.log('element: ', element, 'index:', i);
// })


//solution using array methods (filter, map, reduce)

const result = numbers
  .filter(element => element >= 4)
  .map(element => element * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(result);
