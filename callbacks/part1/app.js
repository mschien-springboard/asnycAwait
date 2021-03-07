// 31 Asnyc Code in JS using Callbacks

// Part 1:
let url = 'http://numbersapi.com';
let favNum = '23';
let route = 'trivia?json';
let favNums = [23, 0, 101];
let fourFacts = [];
let $part1 = $('#part1');
// 1.
$.getJSON(`${url}/${favNum}/${route}`, data => $part1.append(`<div class="my-3">${data.text}</div>`));

// 2.
// $.getJSON(`${url}/${favNums}/${route}`, data => console.log(data));

$.getJSON(`${url}/${favNums}/${route}`, function (data) {
    for (let text of Object.values(data)) {
        $part1.append(`<div class="my-3">${text}</div>`)
        console.log(`${text}`);
    }
});

// 3.
$.getJSON(`${url}/${favNum}/${route}`, function (data) {
    fourFacts.push(data.text)
    $.getJSON(`${url}/${favNum}/${route}`, function (data) {
        fourFacts.push(data.text)
        $.getJSON(`${url}/${favNum}/${route}`, function (data) {
            fourFacts.push(data.text)
            $.getJSON(`${url}/${favNum}/${route}`, function (data) {
                fourFacts.push(data.text)
                fourFacts.forEach(fact => {
                    $part1.append(`<div class="my-3">${fact}</div>`)
                });
            });
        });
    });
});
