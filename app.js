/*

classes --> Object 

Instance Properties: what they have 
    - name
    - age
    - height

Instance methodes: what they do
    - talk
    - run 
    - jump

*/






///////////// Alapok

/*
class Reactangle {
    
    // Setup your objects

    constructor (_height, _width, _color) {
        console.log('The Rectangle is being created ! ');

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea () {
        return this.width * this.height;
    }

    printDescription() {
        console.log('I am a rectangle of '+this.width+' x '+this.height+' and I am '+this.color);
    }
}


let myRectangle = new Reactangle(3, 5, 'blue'); 
let myRectangle2 = new Reactangle(10, 5, 'red'); 

console.log(myRectangle.getArea());
console.log(myRectangle2.getArea());

myRectangle2.printDescription();

*/


////////////// Getters and Setters
/*
class Square {
    
    constructor (_width){
        this.width = _width;
        this.height = _width;
        this.numOfRequestForArea = 0;
    }

    // úgy mond egy funkciót hívhatunk meg a classon belül
    get  area() {
        this.numOfRequestForArea ++;
        return this.width * this.height;
    }

    // és megadhatjuk, ha új értéket adnak a vissza return-ölt értéknek, akkor mit csináljon vele. Jelen példában megadunk neki egy új terület értéket, amit a set area()-ban szétbontunk külön width és height értékre.
    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }

}

let square1 = new Square(4);

square1.area = 25;

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.width);
console.log(square1.height);


console.log(square1.numOfRequestForArea);

*/

////////////// Static Methods
/*
class Square {

    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals ( a, b ) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions (width, height) {
        return width === height;
    }

}


let square1 = new Square(5);
let square2 = new Square(5);

console.log( Square.equals(square1, square2));
console.log( Square.isValidDimensions(6, 6));
*/


//////////////// Inheritance & Extends

    // Parent and Child Class
/*
    class Person {
        constructor (_name, _age) {
            this.name = _name; 
            this.age = _age;
        }

        // methode        
        describe () { 
            console.log('I am '+this.name+' and I am '+this.age+' years old');
        }

    }

    // a fő class elemeit bővíti ki saját child classba, úgy mond örökli a fő Class-tól
    class Programmer extends Person {
        constructor (_name, _age, _yearsOfExperience) {
            super(_name, _age);  // A szülő objektumból lehet így értékeket, funkciókat áthívni. 

            //Costume behaviour

            this.yearsOfExperience = _yearsOfExperience;
        }

        code () {
            console.log(this.name + ' is coding...');
        }
    }

    let person1 = new Person("Jeff", 45);
    let programmer1 = new Programmer("Dom", 56, 12);

    console.log(person1);
    console.log(programmer1);
    programmer1.code();
    programmer1.describe();
    console.log('------------------------');

    const Programers = [
        new Programmer("Jack", 28, 8),
        new Programmer("Jill", 22, 6),
        new Programmer("Arthur", 35, 10),
        new Programmer("Lenny", 30, 10)
    ]

    function developSoftware (programmers) {
        // Develop Software

        for (let programmer of programmers) {  // foreach szerű valami 
            //console.log(programmer);
            programmer.code();
        }
    }


    developSoftware(Programers);

    */

////////////////  Polymorphism 
/*
class Animal {
    constructor ( name ){
        this.name = name;

    }

    makeSound () {
        console.log('Generic the Animal Sound!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // úgy mond a child classba újra létre lehet hozni már létezű methode-usokat(úgymond felül írni), amik az új class-ban fognak csak lefutni
    makeSound (){
        super.makeSound(); // így meg átlehet hozni a parentba definiált methode-usokat 
        console.log('Whoof.. Whoof..');
    }
}


const a1 = new Animal('Dom');
const a2 = new Dog('Rex');
a1.makeSound();
a2.makeSound();
*/







////////////////////////////////////////////////////
///////////////////  Practice  /////////////////////
////////////////////////////////////////////////////

class ListBinding {
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }

// Makes an <li> Text </li> element/tag 
    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        return li;
    }

    update() {
        /* Remove all existing <li> elements tag */
        while( this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }

        /* Fill <ul>/<ol> tag with <li> */
        for( const text  of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    // Add new element
    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }
}


























