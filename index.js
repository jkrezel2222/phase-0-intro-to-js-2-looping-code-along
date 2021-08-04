const guestNames = ["Lisa", "Kaitlin", "Jan"];

function writeCards(guestNames, surprise) {
    let thankYouCards = [];
    for (let i = 0; i <guestNames.length; i++) {
        thankYouCards.push(`Thank you, ${guestNames[i]}, for the wonderful ${surprise} gift!`);
    }
    return thankYouCards;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
