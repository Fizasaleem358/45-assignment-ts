#! /usr/bin/env node
//tas 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

 
//task 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "John Doe";
// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Function to convert the name to titlecase
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
// Print the name in titlecase
console.log("Titlecase:", toTitleCase(personName));

 
//task 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Store the famous quote and its author in variables
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
// Print the quote and its author
console.log(`${author} once said, "${quote}"`);


//task5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Store the famous person's name in a variable
let famous_person = "Albert Einstein";
// Store the famous quote in a variable
let quote = "A person who never made a mistake never tried anything new.";
// Compose the message
let message = `${famous_person} once said, "${quote}"`;
// Print the message
console.log(message);


// task6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personNameWithWhitespace = "\t \n John Doe \t \n";
console.log("Name with whitespace:", personNameWithWhitespace);
let strippedName = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);


//task7  
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition  
console.log("Addition:", 5 + 3);
// Subtraction  
console.log("Subtraction:", 10 - 2);
// Multiplication  
console.log("Multiplication:", 4 * 2);
// Division  
console.log("Division:", 16 / 2);


// task8 You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


// task9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 2;
let message = `My favorite number is ${favoriteNumber}.`;
console.log(message);


//task10  
//Program 1: Addition, Subtraction, Multiplication, and Division 
// Author: Fiza  saleem
// Date:  1-april-2022
// This program demonstrates addition, subtraction,
// multiplication, and division operations in TypeScript.
// Addition  
console.log("Addition:", 5 + 3);
// Subtraction  
console.log("Subtraction:", 10 - 2);
// Multiplication  
console.log("Multiplication:", 4 * 2);
// Division  
console.log("Division:", 16 / 2);
//program-2
// Author: Fiza  saleem
// Date:  1-april-2022
// This program stores the author's favorite number
// in a variable and prints a message revealing it.
// Store the author's favorite number in a variable
let favoriteNumber = 7;
// Create a message revealing the author's favorite number
let message = `My favorite number is ${favoriteNumber}.`;
// Print the message
console.log(message);


// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Store the names of friends in an array called names
let names = ["hurma", "saba", "iqra", "huda", "hina"];
// Print each person's name by accessing each element in the list, one at a time
names.forEach(name => {
    console.log(name);
});



// task12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ["hurma", "saba", "iqra", "huda", "hina"];
names.forEach(name => {
    console.log(`Hello, ${name}! have a nice day!`);
});


// task-13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["car", "motorcycle", "bicycle", "train"];
transportation.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});


// task-14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// List of people to invite to dinner
let guests = ["hurma", "saba", "iqra"];
// Print an invitation message to each person
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please let us know if you can join us.`);
});

// task--15
// Guest List:
// Define the list of people to invite to dinner
let dinnerGuestList = ["hurma", "saba", "iqra"];
// Print an invitation message to each person
// dinnerGuestList.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a delightful evening.`);
// });
// Changing Guest List:
// Remove a guest who can't make it to dinner
let cancelledGuest = "hurma";
let index = dinnerGuestList.indexOf(cancelledGuest);
if (index !== -1) {
    dinnerGuestList.splice(index, 1);
}
// Add a new guest to the list
let newGuest = "ayzal";
dinnerGuestList.push(newGuest);
// Print updated invitation messages to each person
dinnerGuestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a delightful evening.`);
});

// task-16
let dinnerGuestList = ["hurma", "saba", "iqra", "ayzal"];
console.log(dinnerGuestList);
console.log(`we have 3 more friends to invite on dinner`);
// adding three more friends
//ading at begginnng
dinnerGuestList.unshift("fiza");
// ["fiza","hurma", "saba", "iqra", "ayzal"]
console.log(dinnerGuestList);
//add at middle 
dinnerGuestList.splice(2, 0, "arisha");
console.log(dinnerGuestList);
//at at last
dinnerGuestList.push("eshal");
console.log(dinnerGuestList);
//print all
for (let i = 0; i < dinnerGuestList.length; i++) {
    console.log(`Mrs ${dinnerGuestList[i]} you are invited to our dinner`);
}


 
// task-17
let dinnerGuestList = ["hurma", "saba", "iqra", "ayzal", "Fiza", "ansa"];
console.log(`table is not available i can invite only two persons\n`);
// remove all 4 last elements
let friend1 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend1} you are not invited`);
let friend2 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend2} you are not invited`);
let friend3 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend3} you are not invited`);
let friend4 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend4} you are not invited`);
for (let i = 0; i < dinnerGuestList.length; i++) {
    console.log(`Miss. ${dinnerGuestList[i]} you are still invited`);
}
dinnerGuestList.pop();
dinnerGuestList.pop();
console.log(dinnerGuestList);



 
// task-18
let myPlaces = ["Saudi Arabia", "GilgitBaltistan", "hunza", "kashmir", "swat"];
console.log(myPlaces);
// making a copt of an array 
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.sort();
console.log(sortedArray);
// printing original 
console.log(myPlaces);
// reversing original array 
// first we have to make a copy of original array 
let copyOfArray2 = myPlaces.slice();
let reverseOriArray = copyOfArray.reverse();
console.log(reverseOriArray);
// printing original array 
console.log(myPlaces);
// reverse the order of original  array 
let reverseOriArray2 = myPlaces.reverse();
console.log(reverseOriArray2);
let againReverse = reverseOriArray2.reverse();
console.log(againReverse);
//sorting arrays in original
let sortOriArray = myPlaces.sort();
console.log(sortOriArray);
let reverseSortArray = sortOriArray.reverse();
console.log(reverseSortArray);


 
// task-19
let dinnerGuestList = ["hurma", "saba", "iqra", "ayzal", "ansa"];
console.log(`I am inviting ${dinnerGuestList.length}  friends to my dinner which are
 following\n`);
for (let i = 0; i < dinnerGuestList.length; i++) {
    console.log(`${i + 1}. ${dinnerGuestList[i]}`);
}


 
// task-20
let progLan = ["typescript", "python", "javascript", "ruby", "C++"];
//making list
progLan.forEach((pro) => {
    console.log(pro);
});
