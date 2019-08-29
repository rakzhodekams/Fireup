require("@babel/core");

// Arrows are a function shorthand using the => syntax.
// They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
// They support both expression and statement bodies. Unlike functions, arrows share the same lexical this as their surrounding code.
// If an arrow is inside another function, it shares the "arguments" variable of its parent function.

// Expression Bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
// statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});
// Lexical this
var oscar = {
    _name: "Oscar",
    _friends: [],
    printFriends(){
        this._friends.forEach(f => console.log(this._name + " know " + f));
    }
};
// Lexical arguments
function square(){
    let example = () => {
        let numbers = [];
        for (let number of arguments){
            numbers.push(number * number);
        }
        return numbers;
    }
    return example();
}
square(1, 11, 111, 2, 22, 222, 3, 33, 333);

