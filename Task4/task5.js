// ELEMENTS BY TAG NAME

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// throws error 
// items[4].style.backgroundColor='green';


let items = document.getElementsByTagName('li');
console.log(items);

// doesn't throws error 
items[4].style.backgroundColor='green';