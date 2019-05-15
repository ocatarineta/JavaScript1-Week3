/*1*/

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g,''));


/*2*/

let  favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.push('meerkat');
newLength = favoriteAnimals.unshift('capricorn');
console.log("I think the new value of the array is.");
console.log(favoriteAnimals);
console.log("The array has a length of:" + favoriteAnimals.length);
last = favoriteAnimals.pop();
console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));

/* Arrays!

Consider the following array:


2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.

2.2 Log your new array!

2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.

2.4 Write a console.log statement that explains in words you think the new value of the array is.

2.5 Log your new array!

2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).

2.7 Jason does not like 'giraffe', delete this animal from the array.

2.8 Again log your new array.

2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?

2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

More JavaScript tada
Create a function that takes 3 arguments and returns the sum of the these arguments.

Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
}
Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

How do you get the third element from that list?

Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

Create an empty object.

Create an object that contains the teachers that you have had so far for the different modules.

Add a property to the object you just created that contains the languages that they have taught you.

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