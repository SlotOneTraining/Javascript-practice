//console.dir(document);
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = "New Text";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); //Minden ami a DOM-ba van, egy tömböt ad vissza a DOM elemeiről
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
*/

// getElementByID //

//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye'; //Elemben lévő formázásokat felül írja ( span-eket )
//headerTitle.innerHTML = '<h3><i>Hello</i></h3>';
//headerTitle.style.borderBottom = '2px solid silver';

// getElementsByClassName //

/*var items = document.getElementsByClassName('list-group-item');
console.log(items); // tömböt ad vissza a lista elemekről
console.log(items[1]);
items[1].textContent = "Hello niggah";
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = 'silver';

for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'silver';
}*/

// getElementsByTagName //

/*var li = document.getElementsByTagName('li');
console.log(li); // tömböt ad vissza a lista elemekről
console.log(li[1]);
li[1].textContent = "Hello niggah";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = 'silver';

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'silver';
}*/

// querySelector //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input'); // leglsőt kapja el 
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';


// querySelectorAll //
var titles = document.querySelectorAll('.title');  // tömbe összegyűjti az összeset
console.log(titles);
titles[1].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for ( var i = 0; i<odd.length; i++ ) {
    odd[i].style.backgroundColor = 'gray';
    even[i].style.backgroundColor = 'silver';
}