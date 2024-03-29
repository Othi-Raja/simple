let snumber = 442;
let Enumber = 504;
let presentData = [454,450,442,485, 472, 467, 476, 443, 484, 473, 496, 446, 451, 484, 482, 4503, 497, 459, 489, 501, 477, 466, 464, 500, 470, 463, 445, 465, 498, 483, 473, 502, 492, 447, 475];
let sortedData = presentData.slice().sort((a, b) => a - b);
let NewPresentData = [];
let absent = [];

console.log('\n\nsorted\n', sortedData);

console.log("\n\ntotal\n");
for (let data = snumber; data <= Enumber; data++) {
    if (sortedData.includes(data)) {
        NewPresentData.push(data);
    } else {
        absent.push(data);
    }
}

console.log('\n\n present \n', NewPresentData.join(", "),'\t');
console.log('\n\n absent\n', absent.join(", "),'\t');
