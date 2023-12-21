//1. Strings!

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' '); //replace all commas with a space using regex
console.log(myString);

//2. Arrays!

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(
    'I think think the new value of the array is: ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]'
);
console.log(favoriteAnimals); //["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]
console.log(`The array has a length of: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals); //["blowfish", "meerkat", "capricorn", "turtle"]
let index = favoriteAnimals.indexOf('meerkat');
console.log(`The item you are looking for is at index: ${index}`); //1
console.log(favoriteAnimals);

//More JavaScript 🎉

//1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3)); //6
console.log(sum(5, 2, 2)); //9

//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    return `a ${color} car`;
}
console.log(colorCar('red')); //a red car
console.log(colorCar('yellow')); //a yellow car

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let myObject = {
    name: 'Peter',
    age: 30,
    city: 'Sweden',
};

function printObject(object) {
    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

printObject(myObject);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    let vehicle = '';
    if (code === 1) {
        vehicle = 'car';
    } else if (code === 2) {
        vehicle = 'motorbike';
    }
    return `a ${color} ${vehicle}`;
}

console.log(vehicleType('blue', 2)); //a blue motorbike
console.log(vehicleType('red', 1)); //a red car

//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

// if (3 === 3) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }

console.log(3 === 3 ? 'yes' : 'no'); //yes

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    let vehicle = '';
    if (code === 1) {
        vehicle = 'car';
    } else if (code === 2) {
        vehicle = 'motorbike';
    }
    if (age > 1) {
        return `a ${color} used ${vehicle}`;
    } else {
        return `a ${color} new ${vehicle}`;
    }
}

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicles = ['motorbike', 'caravan', 'bike', 'car'];

//8. How do you get the third element from that list?

console.log(vehicles[2]); //bike

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age) {
    let vehicle = vehicles[code - 1];

    if (age > 1) {
        return `a ${color} used ${vehicle}`;
    } else {
        return `a ${color} new ${vehicle}`;
    }
}
console.log(vehicle('green', 3, 1));
console.log(vehicle('red', 1, 2));

//10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function advertisement() {
    let text = "Amazing Joe's Garage, we service ";
    for (let i = 0; i < vehicles.length; i++) {
        if (i === vehicles.length - 1) {
            text += `and ${vehicles[i]}s.`;
        } else {
            text += `${vehicles[i]}s, `;
        }
    }
    return text;
}

console.log(advertisement());

//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehicles.push('truck');
console.log(vehicles);
console.log(advertisement());

//12. Create an empty object.

let emptyObject = {};
console.log(emptyObject);

//13. Create an object that contains the teachers that you have had so far for the different modules.

let teachers = {
    htmlcss: 'Tommy',
    javascript1: 'Sahin',
};
console.log(teachers);

//14. Add a property to the object you just created that contains the languages that they have taught you.

teachers.languages = ['html', 'css', 'javascript'];
console.log(teachers);

//15. Write some code to test two arrays for equality using == and ===. Test the following:
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16. Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

o2.foo = 'test'; //o3.foo will also be "test"
console.log(o3); //{foo: "test"} because o3 is a reference to o2
o1.foo = 'test2'; //o3.foo will not be "test2"
console.log(o3); //{foo: "test"} because o3 is a reference to o2

//Does the order that you assign (o3 = o2 or o2 = o3) matter?

//Yes, it does. If you assign o3 = o2 first, then o3 will be a reference to o2. If you assign o2 = o3 first, then o2 will be a reference to o3.

//17. What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;

//It returns "string" because typeof bar returns "number" and typeof "number" returns "string"
console.log(typeof typeof bar); //string
