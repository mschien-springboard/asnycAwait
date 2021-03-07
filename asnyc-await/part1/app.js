// 31 Asnyc Code in JS using Async/Await

// Part 1:
let url = 'http://numbersapi.com';
let favNum = '23';
let route = 'trivia?json';
let favNums = [23, 0, 101];
let fourFactPromises = [];
let $part1 = $('#part1');

// 1.
async function one() {
    data = await $.getJSON(`${url}/${favNum}/${route}`);
    $part1.append(`<div class="my-3">${data.text}</div>`);
};
one()

// 2.
async function two() {
    data = await $.getJSON(`${url}/${favNums}/${route}`);
    for (let text of Object.values(data)) {
        console.log(`${text}`);
        $part1.append(`<div class="my-3">${text}</div>`);
    };
};
two()

// 3.
async function three() {
    for (let i = 0; i < 4; i++) {
        fourFactPromises.push(axios.get(`${url}/${favNum}/${route}`));
    }
    let FourFactArr = await Promise.all(fourFactPromises);
    FourFactArr.forEach(res => console.log(res.data.text));
    FourFactArr.forEach(res => $part1.append(`<div class="my-3">${res.data.text}</div>`));
};
three()
