//1
/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 *
 * The end result should be:
 *   hello this is a difficult to read sentence
 */

let myString = "hello,this,is,a,difficult,to,read,sentence";

myString = myString.replace(/,/g, " "); //replace all commas with a space using regex

console.log(myString);

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(
    myString === "hello this is a difficult to read sentence",
    "There is something wrong with your solution"
);

//2
/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`The number ${i} is even!`);
    } else {
        console.log(`The number ${i} is odd!`);
    }
}

//3

/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *
 * Expected result:
 *
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

//1.1
let recipe = {
    title: "Omelette",
    servings: 3,
    ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"],
};

console.log(`Meal name: ${recipe.title}`);
console.log(`Serves: ${recipe.servings}`);
console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);

//1.2
let mealRecipe = {
    title: "Omelette",
    servings: 2,
    ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"],
};

// Using a for...in loop to log each property
for (let key in mealRecipe) {
    if (key === "ingredients") {
        console.log(`Ingredients: ${mealRecipe[key].join(", ")}`);
    }
    if (key === "title") {
        console.log(`Meal name: ${mealRecipe[key]}`);
    }
    if (key === "servings") {
        console.log(`Serves: ${mealRecipe[key]}`);
    }
}

//4
/**
 * Keep track of which books you read and which books you want to read!
 *
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */

let books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true,
    },
];

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`;

    if (book.alreadyRead) {
        console.log(`You already read ${bookInfo}`);
    } else {
        console.log(`You still need to read ${bookInfo}`);
    }
}

//5

/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:

const getRandomDrink = () => {
    const drinks = ["cola", "lemonade", "water"];
    return drinks[Math.floor(Math.random() * drinks.length)];
};

let drinkTray = [];

for (let i = 0; i < 5; i++) {
    //if the drink is already twice in the drinkTray, get a new one
    let drink = getRandomDrink();
    while (drinkTray.filter((existingDrink) => existingDrink === drink).length >= 2) {
        drink = getRandomDrink();
    }

    drinkTray.push(drink);
}

console.log(drinkTray);
