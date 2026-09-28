console.log("-- array --");

let 考試成績 = [ 50, 85, 30, 43, 30];

考試成績.push(90);
console.log("陣列長度:  " + 考試成績.length)
console.log("新輸入的成績為: " + 考試成績[考試成績.length -1]);

console.log("取出最後一個值為: " + 考試成績.pop());

console.log("因最後值被取出, 所以結尾值變為: " + 考試成績[考試成績.length -1]);

console.log("最先找到的目標值索引: " + 考試成績.indexOf(30))

