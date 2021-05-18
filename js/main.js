// console.log('Test 123')

// Continue from yesterday with control flow
// The switch case statement

let day = new Date().getDay();
// day = 2
console.log(day);

let literal_day = new Date().toString();

console.log(literal_day);

// Switch Case Statement Syntax
/*
switch(value){
    case valueCheck :
        do something
        break
    case anotherValueCheck:
        do something
        break
}
*/

switch(day){
    case 0:
        console.log("Go to Church because it's Sunday")
        break
    case 1:
        console.log("Write code...it's Monday")
        break
    case 2:
        console.log("Test code... it's Tuesday")
    case 2:
        console.log("Test again!")
    case 3:
        console.log("Test more code... its's Wednesday")
        break
    case 4:
        console.log("Write new feature...it's Thursday")
        break
    case 5:
        console.log("Test new feature...it's Fri-yay!")
        break
    case 6:
        console.log("Take a break...it's Saturday!")
        break
    default:
        console.log("That day is not part of the week. Unless you're John Paul Ringo or George")
};

// Literal Day example with Switch Case Syntax
switch(literal_day.split(' ')[0]){
    case 'Sun':
        console.log("Go to Church because it's Sunday")
        break
    case 'Mon':
        console.log("Write code...it's Monday")
        break
    case 'Tue':
    case 'Wed':
        console.log("Test more code... its's the middle of the week")
        break
    case 'Thur':
        console.log("Write new feature...it's Thursday")
        break
    case 'Fri':
        console.log("Test new feature...it's Fri-yay!")
        break
    case 'Sat':
        console.log("Take a break...it's Saturday!")
        break
    default:
        console.log("That day is not part of the week. Unless you're John Paul Ringo or George")
};



var foo = 0;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}



// JAVASCRIPT OBJECTS
// Simple JavaScript Object

let person = {
    name: 'Fred',
    age: 33,
    fav_color: 'green'
};

// Accessing data in objects
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot Notation


// Complex JavaScript Object
let person2 = {
    name: 'Tim',
    age: 29, 
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Chicago Red Stars']
        },
        {
            baseball: 'Washington Nationals',
            football: 'Los Angeles Rams',
            hockey: 'Las Vegas Golden Knights',
            basketball: 'Oklahoma City Thunder',
            soccer: ['NYCFC', 'Los Angeles Galaxy']
        }
    ]
}

console.log(person2.teams[1].baseball);


// Loop through the object
console.log(person2);
console.log(Object.keys(person2));
console.log(Object.values(person2));


// Bad/Sad Path for looping through objects in JS
for (let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Happy path for looping through objects in JS - keys

for (let i = 0;i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

for (const key in person2){
    console.log(key);
};

// List values from person2 object that are Arrays
for (let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}


// JavaScript Prototype


function AnimalFunc(name, energy){
    let animal = Object.create(AnimalFunc.prototype)
    animal.name = name;
    animal.energy = energy;

    return animal
}

AnimalFunc.prototype.eat = function(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount
}
AnimalFunc.prototype.sleep = function(amount){
    console.log(`${this.name} is sleeping`)
    this.energy += amount
}
AnimalFunc.prototype.play = function(amount){
    console.log(`${this.name} is playing`)
    this.energy -= amount
}


let buddy = AnimalFunc('Buddy', 10);
let spot = AnimalFunc('Spot', 7);


const parent = {
    name: 'Laurie',
    age: 60,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Brian'
child.age = 27


class Animal{
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }

    eat(amount){
        console.log(`${this.name} is eating`)
        this.energy += amount
    }
    sleep(amount){
        console.log(`${this.name} is sleeping`)
        this.energy += amount
    }
    play(amount){
        console.log(`${this.name} is playing`)
        this.energy += amount
    }
}

let goofy = new Animal('Goofy', 25);
let pluto = new Animal('Pluto', 15);


// JavaScript Inheritance
class Human{
    // Constructor Method
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // A PrintInfo method
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`;
    }
}

let wilma = new Human('Wilma', 25, 'Female');
let fred = new Human('Fred', 25, 'Male');

// Inheritance using class -- extends
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking(){
        if (this.walking){
            console.log(`${this.name} is walking`)
        } else {
            console.log(`${this.name} is crawling`)
        }
    }

    printInfo(){
        let info = super.printInfo()
        return info + `\nWalking: ${this.walking}`
    }
}

let bambam = new Baby('Bam Bam', 1, 'Male', true);


// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.
*/

let count_up = (function(){
    let counter = 0; // This will be our private variable
    console.log('hit') // Show that initial self-invoking function ran once
    function addCounter(){return counter++}
    return addCounter
})()

let addNames = (function(){
    let names = [];
    console.log('Adding Names');
    function addToNames(name){
        names.push(name)
        return names
    }
    return addToNames
})()



// Async JavaScript Section //

// -- JavaScript Callbacks -- //
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example
function first(){
    console.log(1);
};

function second(){
    console.log(2);
};

// first();
// second();

// But what happens when we add a delay to the execution?
function first_delay(){
    //Simulate a 5 second delay
    setTimeout(function(){console.log(1)}, 5001)
}

function second_delay(){
    setTimeout(function(){console.log(2)}, 5000)
}

first_delay();
second_delay();

// Callback Function Syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    return callback()
}

function finishedHomework(){
    return 'Finished with homework'
}

// console.log(doHomework('JavaScript', finishedHomework))

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/

// We solve this issue with Promises!

// Creating a JS Promise
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0){
            resolve(num);
        } else {
            reject('This number is not even!');
        }
    })
}

isEvenNumber(8).then((result) => {
    return result * 2
}).then((newResult) => {
    console.log(newResult)
}).catch((error) => {
    console.error('Odd number', error)
})



// Async/Await
function increaseSalary(base, increase){
    const newSalary = base + increase;
    console.log(`New salary: ${newSalary}`)
    return newSalary
}


// function to add base salary slowly
function slowAddition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout(() => resolve(n1 + n2), 2000)
    })
};

function increaseSalarySlow(base, increase){
    const newSalary = slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}


// Create an async function with await
async function increaseSalaryAsync(base, increase){
    const newSalary = await slowAddition(base, increase);
    console.log(`New Salary: ${newSalary}`);
    return newSalary; 
}

