
/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
result = [].concat(numberArray.map((item) => {
    if (item == 1) {
        return "one";
    } else if (item == 3) {
        return "three";
    }
    else if (item == 5) {
        return "five";
    }
    return item;
})).concat(stringArray.map((item) => {
    if (item == "foo") {
        return "f00";
    } else if (item == "bar") {
        return "Bar";
    }
    else if (item == "baz") {
        return "b@z";
    }
    else if (item == "qux") {
        return "quX";
    }
    else if (item == "echo") {
        return "3ch0";
    }
    return item;
}));

result.splice(numberArray.length, 0, "h@ck");
result.unshift("h@ck");
result.push("h@ck");


//export result
module.exports = result;