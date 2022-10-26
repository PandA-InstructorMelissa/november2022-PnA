// 1. What are the 3 ways to declare something in js
    // var, let, const
    var age = 10
    let favFruit = 'watermelon'
    const havingFun = true
// 2. Which ones can change and which ones can not
    /* const cannot change. var and let can change */
    var a = 1
    a = 2
    let b = 1
    b = 2
// 3. What are some data types 
    //string, number, boolean, array, object
    stringVar = "test";
    numberVar = 5;
    boolVar = true;
    arrayVar = [1,2,3,4,5]
    objVar = {name:"Jane Doe"}
    //Function, null, undefined
// 4. Create an array and print it's contents
    let pizzaToppings = ['cheese', 'sausage', 'pepperoni']
    console.log("************" + pizzaToppings)
    
// 5. Add an item to the array 
    const addTopping = (topping) => {
        pizzaToppings.push(topping);
    }
    addTopping('ham');
// 6. Remove an item from the array
    pizzaToppings.pop()

// 7. Add to the beginning of the array
    pizzaToppings.unshift("bacon")
    
// 8. Remove from the beginning of the array
    pizzaToppings.shift();
    console.log("!!!!!!!!!!!!!" + pizzaToppings)
    
// 9. What is the length of the array?
console.log(pizzaToppings.length)

// 10. Create an object
const anObject = { 
    prop1: "a string", 
    prop2: 100, 
    prop3: true, 
    prop4: null, 
    prop5: ["arrayInd0", "arrayInd1", "arrayInd2"]
}
// 11. Create an objects with multiple key/value pairs plus an array containing objects
const anotherObject = { 
    prop1: "a string", 
    prop2: 100, 
    prop3: true, 
    prop4: null, 
    prop5: [
        {name: "obj1"}, 
        {name: "obj2"}, 
        {name: "obj3"}
    ]
}
// Q 12-14
var duck = {
    bill: true,
    feet: "webbed",
    featherColors: [
        "yellow", 
        "Brown", 
        "Blue",
        "Green"
    ],
    famousDucks: [
        {name: "Scrooge McDuck", company: "Disney"},
        {name: "Daffy Duck", company: "Warner Brothers"},
        {name: "Darkwing Duck", company: "Disney"}
    ]
}
// 12. Print out the Names of the Famous Ducks in the provided object
for (let i=0; i < duck.famousDucks.length; i++) {
    console.log(duck.famousDucks[i].name);
}
// 13. Print out the duck object
console.log(duck)
// 14. What data type is bill? //Boolean