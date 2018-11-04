/*
##################################################
##  Pluralsight - Blackjack (Javascript Basic)  ##
##################################################
*/

// Card Variables
let suits = ['Hearts','Clubs','Diamonds','Spades'];
let values = ['Ace','King','Queen','Jack',
              'Ten','Nine','Eight','Seven',
              'Six','Five','Four','Three','Two'];

// DOM Variables              
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let stayButton = document.getElementById("stay-button");
let hitButton = document.getElementById("hit-button");


// Game Variables 
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    draw = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    draw = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard() , getNextCard() ];
    playerCards = [ getNextCard() , getNextCard() ];

    newGameButton.style.display = "none";
    hitButton.style.display = "inline-block";
    stayButton.style.display = "inline-block";
    showStatus();
});

hitButton.addEventListener('click', function() {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
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

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) { //amilyen hosszú a tömb annyiszor lesz megkeverve
        let swapIdx = Math.trunc(Math.random()*deck.length);  //0 és 51 közötti számot generálunk és lecsonkoljuk a tizedes pont utáni részt
        let tmp = deck[swapIdx]; // Elmentjük a kapott lapszámot
        deck[swapIdx] = deck[i]; // (első körben) első lapot áthelyezzük a (random által kapott számú) x-ik helyre
        deck[i] = tmp;  // deck[i] -ik helyre berakjuk az előző helyről felszabaduló lapot
    }
}

function getNextCard() { // Tömb első elemét kiemeli a deck[] tömbből és lementi
    return deck.shift();
}

function getCardString (card) {  //Meg jeleníti az objektumok tartalmát
    return card.values +' of '+ card.suit;
}

function getCardNumericalValue (card) {
    switch(card.values) {
        case 'Ace':
            return 1;

        case 'Two':
            return 2;

        case 'Three':
            return 3;

        case 'Four':
            return 4;

        case 'Five':
            return 5;

        case 'Six':
            return 6;

        case 'Seven':
            return 7;

        case 'Eight':
            return 8;

        case 'Nine':
            return 9;

        default: 
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    
    for ( var i = 0; i < cardArray.length; i++) {
    
        let card = cardArray[i];
        score += getCardNumericalValue(card);

        if ( card.value === 'Ace') {
            hasAce = true;
        }
    }

    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }

    return score;

}

function updateScore() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    
    updateScore();

    if (gameOver) {
        // let dealer take cards
        while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21 ){
            dealerCards.push(getNextCard());
            updateScore();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
        }
        else if (dealerScore === playerScore){
            draw = true;
            gameOver = true;
        }
        else if (dealerScore > 21 || playerScore == 21 ){
            playerWon = true;
            gameOver = true;
        }
        else if(gameOver){

            if(playerScore > dealerScore) {
                playerWon = true;
            }
            else {
                playerWon = false;
            }
    }
}

function showStatus() {
    if  (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for ( var i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) +'\n';
    }

    let playerCardString = '';
    for ( var i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) +'\n';
    }

    updateScore();

    textArea.innerText = 'Dealer has:\n'+
                         dealerCardString +
                         '(score: '+dealerScore +')\n\n' +

                         'Player has:\n'+
                         playerCardString +
                         '(score: '+playerScore +')\n\n';

    if(gameOver) {
        if(draw){
            textArea.innerHTML += "<strong>Draw!!!</strong>";
        }
        else if(playerWon) {
            textArea.innerHTML += "<strong>You Win!!!</strong>";
        }else{
            textArea.innerHTML += '<strong>Dealer Wins!</strong>';
        }

        newGameButton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
    }
}





