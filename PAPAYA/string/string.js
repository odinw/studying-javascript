console.log("-- string --");

let clothes = 300;
let pants = 700;
let discount = 0.8;
let total = (clothes + pants) * discount;

let summary = 
" 文字串接:  " +
" 衣服為 " + clothes + 
" 褲子為 " + pants +
" 折扣 " + discount +
" 總金額 " + total;
console.log(summary)

let summary_string_template = `
字串模板:
衣服為${clothes}
褲子為${pants}
折扣${discount}
總金額${total}
`;
console.log(summary_string_template)

let func_length = `length 方法計算字串長度, summary 長度為 : ${summary.length}`;
console.log(func_length)

let say_hi = "Hi Tom";
let func_replace = say_hi.replace("Hi", "Hello");
console.log("將 Hi 取代為 Hello: " + func_replace);

let func_slice_name = say_hi.slice(3, say_hi.length);
console.log("slice 擷取姓名為: " + func_slice_name);