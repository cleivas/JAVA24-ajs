import _, { random } from "underscore";

console.log(_)
const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

for(const suit of suits){
    for(const char of chars){
        deck.push({suit, char})
    }
}


const shuffledDeck = _.shuffle(deck);
console.log(deck)
console.log(shuffledDeck)

const randomNumber = _.random(20, 53);
console.log(randomNumber)


// dra tre random kort från den blandade leken
const randomCards = _.sample(shuffledDeck, 3);
console.log(randomCards);


// Ta bort randomCards från shuffled deck
const shuffledDeckWithoutRandomCards = _.without(shuffledDeck, ...randomCards);
console.log(shuffledDeckWithoutRandomCards);

