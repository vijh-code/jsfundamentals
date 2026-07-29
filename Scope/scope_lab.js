// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I was declared inside a block, but var is not block-scoped";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
//Block Scope
console.log(blockVar);
console.log(blockLet);

}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

function show() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a local let variable";
    const functionConst = "I'm a local constant";   

    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
} 
show();   