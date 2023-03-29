// 1
let itemList=document.querySelector('#items');
 console.log(itemList.parentElement);

 itemList.parentElement.style.backgroundColor='#f4f4f4';

// 2
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='cyan';

 
// 3
console.log(itemList.lastChild);

// 5
itemList.firstElementChild.style.backgroundColor='indigo';

// 6
console.log(itemList.firstChild);

// 7
console.log(itemList.nextSibling);

// 8
console.log(itemList.nextElementSibling);

// 9
console.log(itemList.previousSibling);

// 10
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

// 11
let newDiv= document.createElement('div');
console.log(newDiv);

// 12
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);

// 13
let newDivText= document.createTextNode('Hello World');

// 14
newDiv.appendChild(newDivText);


let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

container.insertBefore(newDiv, h1);
newDiv.style.fontSize='30px';



let newDiv1=document.createElement('div');
console.log(newDiv1);
let newDivText1= document.createTextNode('Hello World 1');
newDiv1.appendChild(newDivText1);

let container1=document.querySelector('.container .card card-body .title');
let ul=document.querySelector('.container .card card-body .list-group');

container1.insertBefore(newDiv1, ul);






