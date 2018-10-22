//alert("ok");

//////////////// varibles

/*
var number1 = 15;   INT
var number2 = 10;
*/

/*
var number1 = '15';  String
var number2 = '10';
*/

//alert(number1+number2);

/*var test = 'Ez egy teszt';
var Test = 'ezt nem fogja beolvasni, mert nagybetűvel lett validálva és a JS case sensitive'

alert(test);

var MyFavoriteNumber;   // Mind valid álltalában a 2. használjuk
var myFavoriteNumber;
var my_favorite_number;
*/

///////////////// arrays

//var colors = new Array('red','blue','green'); 
//var colors = ['red','blue','green'];  // <- Ezt használják főként / automatikusan indexelt
// elem hozzáadása a tömbhöz
//colors[3] = 'brown';
//colors.push('yellow');
//alert(colors[3]);

/*var numbers = [5,8,44,14];

alert(numbers[0] + numbers[2]);
alert(numbers.length);
alert(numbers.sort());
//alert(numbers.reverse());
*/

/////////////// Loops
/*console.log('Hello World!');
    for(var i = 0; i <= 10; i++) {
        console.log('This number is: ' + i);
    }
var i = 0;

    while(i <= 10) {
      console.log(i);
      i++;  
    }

var numbers = [45,55,84,23,74,11,24];
numbers.reverse();

    numbers.forEach(function(number) {
        console.log(number);
    })
*/

////////////// Conditionals

/*
var num1 = 2;
var num2 = 5;

    if(1 == 2 && num1 == 2) {
        console.log('this is true');
    } else {
        console.error("this isn't true");
    }
*/
/*
var fruit = 'orange';

switch(fruit) {
    case 'bannana':
        console.log('I hate Bannanas');
        break;

    case 'apple': 
        console.log('I love Apple');
        break;

    case 'orange':
        console.log('Orange is ok');
        break;

    default: 
        alert('I love other fruits');
        break;
}
*/

////////////// Objects
/*
var person = {
    firstName : 'Dani',
    lastName : 'Kis',
    age : 25,
    children : ['Béla' , 'Jóska'],
    address: {
        street : 'Etele út.',
        city : 'Budapest',
        number : '52/B'
    },
    fullName : function() {
        return this.firstName + ' ' + this.lastName; // Besírsz, ez nagyon vad
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.children[0]);
console.log(person.children[1]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.number);

console.log(person.fullName());
*/

/*
var apple = new Object();
apple.color = 'red';  // így is lehet hozzá adni tömb elemeket :D 
apple.shape = 'rounded';
apple.describe = function() {   // Így is lehet function-t definiálni egy classnak
    return 'Az alma piros - The Apple is '+this.color;
}

console.log(apple.color);
console.log(apple.describe());
*/

//Constructor Pattern
/*
function fruit(name, color, shape) {    //példány(class) definiálása/validálása
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}

var apple = new fruit('apple','red','round'); // új példány létrehozása
var bannana = new fruit('bannana','yellow','none shape');

console.log(apple.describe());
console.log(bannana);
console.log(bannana.color);

*/
//// Tömbökben is lementhetünk külön álló objecteket
/*
var useres = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Johnny walker',
        age: 22
    },
    {
        name: 'jóska',
        age: 42
    }
];

console.log(useres[0].name);
console.log(useres[0].age);
*/

////////////////////// Events

function doClick() {
    alert('You Clicked!');
}

function changeText() {
    var heading = document.getElementById('heading');
    heading.innerHTML = 'This is a new Text';

}

function showDate() {
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate() {
    var time = document.getElementById('time');
    time.innerHTML = ''; 
}

function changeBackground(x) {
    console.log(x.value);
    var body = document.getElementById('hover');
    var heading = document.getElementById('heading');
    body.style.background = x.value;
    heading.style.color = x.value;

}

function validateForm() {
    var firstName = document.forms["MyForm"]["firstName"].value;

    if( firstName == null || firstName == "") {
        alert("First name is required !!!");
        return false;
    }

    if( firstName.length < 4) {
        alert("First name must be at least 4 characters.");
        return false;
    }
}