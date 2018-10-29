//    Pluralsight - Javascript Első léőések 

/*
let  productName = "hammer\' s",
     productId = "H123";

console.log(productName,productId)
*/


//--------------- Black Jack -------------------

/*
let card1 = "Ace of Spades",
    card2 = "Ten of Hearts",
   //  card3 = [1,2,3,4,5,6,7,8,9];

    console.log("Welcome to Blackjack Game!");
    console.log("You are dealt: ");
    console.log(" "+ card1);
    console.log(" "+ card2);
*/
    //console.log(typeof(card1));  megnézhetjük a változó értékének típusát

    //let result = card3.pop();
    //let result = card3.shift();
    //let result = card3.splice(3,2);
    //console.log(result+" a fenn maradt tömb elemei "+ card3);

let decks = [
    "Ace of Spades",
    "Two of Spades",
    "Three of Spades"
];

let playerCards = [ decks[0], decks[2] ];

console.log("Welcome to Blackjack Game!");
console.log("You are dealt: ");
console.log(" "+ playerCards[0]);
console.log(" "+ playerCards[1]);

