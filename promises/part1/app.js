// 31 Asnyc Code in JS using Promises

// Part 1:
let url = 'http://numbersapi.com';
let favNum = '23';
let route = 'trivia?json';
let favNums = [23, 0, 101];
let fourFactPromises = [];
let $part1 = $('#part1');

// 1.
$.getJSON(`${url}/${favNum}/${route}`, data => $part1.append(`<div class="my-3">${data.text}</div>`));

// 2.
// $.getJSON(`${url}/${favNums}/${route}`, data => console.log(data));

$.getJSON(`${url}/${favNums}/${route}`, function (data) {
    for (let text of Object.values(data)) {
        console.log(`${text}`);
        $part1.append(`<div class="my-3">${text}</div>`)
    }
});

// 3.
for (let i = 0; i < 4; i++) {
    fourFactPromises.push(
        axios.get(`${url}/${favNum}/${route}`)
    )
}
Promise.all(fourFactPromises
).then(FourFactArr => {
    FourFactArr.forEach(res => console.log(res.data.text));
    FourFactArr.forEach(res => $part1.append(`<div class="my-3">${res.data.text}</div>`));
})
