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
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
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
/*
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
}*/

// Traversing the DOM //

var itemList = document.querySelector('#items');

// parentNode
/*
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);
itemList.parentNode.style.backgroundColor = 'silver';
*/

// parentElement
/*
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);
itemList.parentElement.style.backgroundColor = 'orange';
*/

// childNodes
//console.log(itemList.childNodes); -> Ezt a white space-ek miatt nem nagyon használják
/*
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.color="Yellow"
*/

//firstChild
/*
console.log(itemList.firstChild);

//firstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello";
*/

//lastChild
/*
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello";
*/


//nextSibling
/*
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);*/


//previousSibling
/*
console.log(itemList.previousSibling);

//previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
*/


// createElement

/////// create a div
/*
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello-class';

//add id
newDiv.id= 'hello-id';

// add attr
newDiv.setAttribute('title','Hello New Div');

// create text node
var newDivText = document.createTextNode('Hello Word!');

// add the text to div
newDiv.appendChild(newDivText);

//add DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); 

// .insertAfter NINCS !!! az csak jqueryben létrehozott új function();
*/


//////////////// Events

//Click
//var button = document.getElementById('button').addEventListener('click', function(){});

/*
var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
    //alert('Button clicked!');
    //document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('#main').style.backgroundColor = 'silver';

    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);

    /*
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type); //event típusa
    */
    
    /*
    console.log(e.clientX); // Egész documentumnál figyeli a cursor position-t
    console.log(e.clientY);
    console.log(e.offsetX); // Megadott elemntnél figyeli a cursor position-t
    console.log(e.offsetY);
    

    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    console.log('-------------');
} */

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click',  runEvent); // 1x click
//button.addEventListener('dblclick',  runEvent); // 2x cilck
//button.addEventListener('mousedown',  runEvent);  // lenyomjuk az egeret
//button.addEventListener('mouseup',  runEvent); // felengedjük a clicket

//box.addEventListener('mouseenter', runEvent); //hover: amikor belebegtetjük a cursort az elembe
//box.addEventListener('mouseleave', runEvent); //hover: Az elemen belüli child elemek 'belépését érzékeli' ez az event
//sbox.addEventListener('mouseover', runEvent); //hover: amikor kilebegtetjük a cursort az elemből
//box.addEventListener('mouseout', runEvent);  //hover: Az elemen belüli child elemek 'kilépését érzékeli' ez az event

//box.addEventListener('mousemove', runEvent); // Elemen belüli egétr mozgatást érzékeli ez az event


// keydown

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent); // amikor lenyomjuk a gombot
//itemInput.addEventListener('keyup', runEvent);  // amikor felengedjük a gombot lenyomás után
//itemInput.addEventListener('keypress', runEvent);  // szimplán amikor megnyojuk a gombot



// Input 

//itemInput.addEventListener('focus', runEvent); // input mezőbe kattintunk akkor kapja meg afocus állapotot, és ezzel azt kezeljük
//itemInput.addEventListener('blur', runEvent); // amikor kilépünk a focus állapotból

//itemInput.addEventListener('cut', runEvent); // amikor vágólapra helyezzük a kivágott szöveget
//itemInput.addEventListener('copy', runEvent); // amikor kimásolunk valamit a vágóasztalra
//itemInput.addEventListener('paste', runEvent); //amikor a vágóasztalban tárolt adatot bemásoljuk a kijelölt elmebe

//itemInput.addEventListener('input', runEvent); // bármit amit csinálsz az inputba (press,cut,copy...), azt figyeli ez az event


// Select

select.addEventListener('change',runEvent);  // Amikor értéket váltunk a select input mezőben
select.addEventListener('input',runEvent);  // Ennél is működik az input event

form.addEventListener('submit', runEvent);  // Amikor a 'submit'-al elküldjük a formot

function runEvent(e) {
    
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    /* 
    console.log('EVENT TYPE: '+e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    */
   // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}