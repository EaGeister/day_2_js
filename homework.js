//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Pistachio","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Pistachio",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Oreo Malt"
    }]
}

function favorite_food(person){
    for(let x = 0; x < Object.keys(person).length; x++){ //go up by one
        console.log(Object.keys(person)[x])  // print statement
        console.log(Object.valuesperson)[x])   // print
    }




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(name, age){  // making a function
        this.name = name;
        this.age = age;
    }
    printInfo(name){
        return `Name: ${this.name} \nAge: ${this.age}` }addAge(age){
        const add_age = this.age + 1
        return `Congratulations ${this.name}
        You are now ${add_age}!`
    }
}
let Sora = new Person('Sora', 13)
let Dedede = new Person('Dedede', 20)
console.log(Sora.printInfo())
console.log(Sora.addAge())
console.log(Dedede.printInfo())
console.log(Dedede.addAge())   //printing info



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/