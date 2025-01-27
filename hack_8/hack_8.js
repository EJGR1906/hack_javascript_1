/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result = arr.filter((item, index) => {
    return index > 0 && index < 4;
}
).map((item, index) => {
    if (index < 2) {
        return item.replace("a", "@");
    } else {
        return item.toUpperCase();
    }
}
)


//export result
module.exports = result;