/*1*/

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g, ''));


/*2*/

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.push('meerkat');
newLength = favoriteAnimals.unshift('capricorn');
console.log("I think the new value of the array is.");
console.log(favoriteAnimals);
console.log("The array has a length of:" + favoriteAnimals.length);
last = favoriteAnimals.pop();
console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));


/*More JavaScript tada*/

function functionSum(arg1, arg2, arg3) {
    return (1 + 2 + 3);
}
console.log(functionSum);



function carColor(color) {
    print("a" + "red" + "car")
}
console.log(carColor());


const car = {
    carName: "Audi",
    year: 2019,
    carColor: "blue"
};

function carObj() {
    return (carName, year, carColor)
}
console.log(car);


function vehicleType(color, code) {
    if (code == 1) {
        return console.log("A ", color, "car")
    }
    else if (code == 2) {
        return console.log("A ", color, "motorbike")
    }
}
vehicleType("blue", 2);


3 === 3 ? console.log("yes") : console.log("no");


function vehicle(color, code, age) {
    if (age => 5) {
        return console.log("A", color, "used car")
    }
    else (age !== 5)
    return console.log("A", color, "not used car")

}
vehicle("blue", 1, 5);


let vehicleList = ["motorbike", "caravan", "bike", "stool", "book"];
console.log(vehicleList[2]);


function vehicle(color, code, age) {
    if (age => 5) {
        return console.log("A", color, "used car")
    }
    else (age !== 5)
    return console.log("A", color, "new bike")
}
console.log(vehicle("green", 3, 1));

let object = {};
console.log(object);


/*
Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?*/



let object = {};
console.log(object);


let teachers = {
    Ahmed: "html",
    Ahmed: "CSS",
    Zohir : "javascript"
}
console.log(teachers);


/*
Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

Don't cheat! Seriously - try it first.

Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.

More insights from this Stack Overflow question.

Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter?

What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.*/