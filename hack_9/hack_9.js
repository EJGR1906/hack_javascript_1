/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

arr = arr.filter((item) => {
    return item.charAt(0) === "b";
})

result = arr.length;

//export result
module.exports = result;