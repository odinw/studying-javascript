console.log("-- if else --");

let 數學 = 90;
let 合格 = 60;
let 高分 = 80;


if (數學 > 高分)
    console.log("數學 高分");
else if (數學 >= 合格)
    console.log("數學 合格");
else
    console.log("數學 不合格");


let 出席率 = 0.7;
let 出席標準 = 0.8;
if (數學 >= 高分 && 出席率 >= 出席標準)
    console.log("通過課程");
else if (數學 >= 高分 || 出席 >= 出席標準)
    console.log("通過 但須補作業");
else
    console.log("未通過")