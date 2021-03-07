// 31 Asnyc Code in JS using Async/Await
// Part 2:

$(function () {

    let url = 'https://deckofcardsapi.com/api/deck';
    let $cards = $('#cards');
    let $draw = $('#draw');

    // 1.
    async function one() {
        let DeckData = await $.getJSON(`${url}/new/shuffle/`);
        let deckId = DeckData.deck_id;
        let DrawData = await $.getJSON(`${url}/${deckId}/draw/`);
        let { suit, value } = DrawData.cards[0];
        console.log(`${value} of ${suit}`);
    };
    one()

    // 2.
    async function two() {
        let DeckData = await $.getJSON(`${url}/new/shuffle/`);
        deckId = DeckData.deck_id;

        let DrawDataOne = await $.getJSON(`${url}/${deckId}/draw/`);
        let DrawDataTwo = await $.getJSON(`${url}/${deckId}/draw/`);
        [DrawDataOne, DrawDataTwo].forEach(draw => {
            let { suit, value } = draw.cards[0];
            console.log(`Card: ${value} of ${suit}`);
        });
    };
    two()

    // 3.
    async function three() {
        let DeckData = await $.getJSON(`${url}/new/shuffle/`);
        deckId = DeckData.deck_id;

        $draw.on('click', async function () {
            let DrawData = await $.getJSON(`${url}/${deckId}/draw/`);
            let { suit, value } = DrawData.cards[0];
            let cardImg = DrawData.cards[0].image;
            console.log(`Card: ${value} of ${suit}`);
            $cards.append(
                $('<img>', {
                    src: cardImg,
                })
            );
        })
    };
    three()

});