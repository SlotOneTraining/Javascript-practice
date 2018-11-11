///////////// ES5 - Basic
/*
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 
}

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2015',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 
}

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));
*/


///////////// Constructor
/*
function Book(title, author, year) {
    //console.log('Book initalized...');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 
}

// Instatiate an Object
const book1 = new Book('Book One','John Doe','1995');
const book2 = new Book('Book Two','Jane Doe','2001');

console.log(book1);
console.log(book2);
console.log(book2.getSummary());
*/

///////////// Prototypes 
/*
function Book(title, author, year) {
    //console.log('Book initalized...');
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
} 

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object 
const book2 = new Book('Book Two','Jane Doe','2001');

console.log(book2.getSummary());
console.log(book2.getAge());
console.log('-------------------');
console.log(book2);
book2.revise('2018');
console.log(book2);
*/



//////////////// Inherites
/*
// constructor
function Book(title, author, year) {
    //console.log('Book initalized...');
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
} 

// Inherit Prototype //hozzá adjuk a parent object prototype-ot 
Magazine.prototype = Object.create(Book.prototype);


// Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}


const mag1 = new Magazine('Mag One','John Doe','2018','Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());
*/


//////////////// Object Create

// Object of Protos
/*
const bookProtos = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } ,
    getAge :  function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}
*/

// Create Object
/*
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';
*/

// Create Object 2
/*
const book1 = Object.create(bookProtos, {
    title : { value : 'Book One' },
    author : { value : 'John Doe' },
    year : { value : '2001' }
});

console.log(book1);
*/

//////////////// Classes

/*
class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() { // Ez az alap Objectnek lesz funkciója és nem egy újra ltrehozott példánynak (asszem)
        return 'Barnes & Noble';
    }
}


// instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log('---------------------------');
console.log(Book.topBookStore());
*/


////////////////////// Sebclasses

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}

// Magazine subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year); // ezzel hivatkozunk a parent class elemeire, amiket használatba küld át a parentnek. PL így tudjuk használni a getSummary() függvényt
        this.month = month;
    }
}

const mag1 = new Magazine('Mag one', 'John Doe', '2001', 'April');

console.log(mag1);
console.log(mag1.getSummary());

