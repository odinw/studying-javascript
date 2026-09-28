
console.log("-- number --");

let candy_count = 120;
let kids = 7;
let avg = candy_count / kids;
console.log("每人分配到的糖果數:" + avg);

console.log("固定小數位數 toFixed() : " + avg.toFixed(2));

console.log("四捨五入 Math.round : " + Math.round(avg))