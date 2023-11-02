'use strict';


function camelize(str)
{
    return str.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

const str = "-el-victor-esta-bueno";
const camelizedStr = camelize(str);
console.log(camelizedStr); // Output: "myShortString"
