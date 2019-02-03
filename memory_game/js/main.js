//console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){alert("You've found a match");}
	else {alert("Sorry, try again!");}
;}


*/

var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];
var eachCard = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} 
	else {
	console.log("Sorry, try again.");
}
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
};

flipCard(0);
flipCard(2);



checkForMatch();
