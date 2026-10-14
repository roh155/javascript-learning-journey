// Simlating ES6 Modules (import/export pattern) in JavaScript
const mathUtils = {
    add: function(a, b){
        return a+b;

    },
    multiply: function(a , b){
        return a *b;

    }
};
function executeModuleOperations(){
    let sum = mathUtils.add(15, 25);
    let product = mathUtils.multiply(5, 6);

    console.log("Module Operation Results:");
    console.log("Addition Result:", sum);
    console.log("Multiplication Result:", product);
}
executeModuleOperations();