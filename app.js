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

/*
let playerCards = [ decks[0], decks[2] ];

console.log("Welcome to Blackjack Game!");
console.log("You are dealt: ");
console.log(" "+ playerCards[0]);
console.log(" "+ playerCards[1]);
*/

/*let varible ="w";
let nan = isNaN(varible)
console.log(nan)*/

/*var szoveg = document.getElementById('p');
szoveg.innerText = 'Yo my niggah';
szoveg.style.color="red";

var button = document.getElementById("ok");

button.addEventListener('click', function() {
    szoveg.style.display="none";
    alert("mükszik brah");
})*/



let suits = ['Hearts','Clubs','Diamonds','Spades'];
let values = ['Ace','King','Queen','Jack',
              'Ten','Nine','Eight','Seven',
              'Six','Five','Four','Three','two'];

let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let stayButton = document.getElementById("stay-button");
let hitButton = document.getElementById("hit-button");

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener('click', function() {
    textArea.innerText = "Started...";

    newGameButton.style.display = "none";
    hitButton.style.display = "inline-block";
    stayButton.style.display = "inline-block";
});

function createDeck() {

   let deck = [];

    for (let suitIndex=0; suitIndex<suits.length; suitIndex++) {

        for (let valueIndex=0; valueIndex<values.length; valueIndex++) {
            
            let card = {
                suit: suits[suitIndex],
                values: values[valueIndex]
            }

            deck.push(card);
        }
    }

    return deck;
}

function getNextCard() {
    return deck.shift();
}

function getCardString (card) {
    return card.values +' of '+ card.suit;
}

let deck = createDeck();
let playerCards = [ getNextCard() , getNextCard() ];


//console.log(deck);
console.log(getCardString(playerCards[0]));
console.log(getCardString(playerCards[1]));

