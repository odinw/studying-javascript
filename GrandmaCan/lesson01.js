// it's comments
/*
    it's multi-line
    comments
 */
var itsString = "it's string";
var itsNumber = 12.3;
var itsBoolean = true;
document.write(itsString);
document.write("<br />");
document.write(itsNumber);
document.write("<br />");
document.write(itsBoolean);


// string operate
document.write("<br /> operate: " + itsString + itsString);

// string method
document.write("<br /> get char by index: " + itsString.charAt(1));
document.write("<br /> get index by char: " + itsString.indexOf("t"));
document.write("<br /> substring: " + itsString.substring(2, 4));