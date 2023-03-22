// console.log('I love Git');
// console.dir(document);
// EXAMINE THE DOCUMENT OBJECT //

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=1234;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

// GET ELEMENT BY ID 

var headerTitle=document.getElementById('header-title'); 
var header=document.getElementById('main-header'); 
console.log(headerTitle);
// headerTitle.textContent='HELLO';
// headerTitle.innerText='GOODBYE';

// headerTitle.innerHTML='<h3>Hello</h3>';

header.style.borderBottom='solid 5px #000';


// console.log(document.all[14]);
var title=document.getElementById('title'); 
console.log(title);

title.style.fontWeight='bold';
title.style.color='green';