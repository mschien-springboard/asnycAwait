// 31 Asnyc Code in JS using Promises
// Part 2:

$(function () {

    let url = 'https://deckofcardsapi.com/api/deck';
    let $cards = $('#cards');
    let $draw = $('#draw');

    // 1.
    $.getJSON(`${url}/new/shuffle/`).then(data => {
        let deckId = data.deck_id;
        return $.getJSON(`${url}/${deckId}/draw/`)
    }).then(data => {
        let { suit, value } = data.cards[0];
        console.log(`${value} of ${suit}`);
    });




    // 2.
    $.getJSON(`${url}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        return $.getJSON(`${url}/${deckId}/draw/`)
    }).then(data => {
        let { suit, value } = data.cards[0];
        console.log(`Card 1: ${value} of ${suit}`);
        return $.getJSON(`${url}/${deckId}/draw/`)
    }).then(data => {
        let { suit, value } = data.cards[0];
        console.log(`Card 2: ${value} of ${suit}`);
    });



    // 3.
    $.getJSON(`${url}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
    })

    $draw.on('click', function () {
        $.getJSON(`${url}/${deckId}/draw/`).then(data => {
            let { suit, value } = data.cards[0];
            let cardImg = data.cards[0].image;
            console.log(cardImg)
            console.log(`Card: ${value} of ${suit}`);
            $cards.append(
                $('<img>', {
                    src: cardImg,
                })
            );
        })
    });

});