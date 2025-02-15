/*

Array Methods:

-Map
-Filter
-Reduce
-Push
-Pop
-Foreach
-Slice
-Splice
-Indexof


*/
/*Example 
Given an array of values representing distances in miles, you need to convert them to kilometer . The conversion rate is 1 mile = 1.6 kilometers. */

/* let numbers = [4, 9, 16, 25 , 36];

let index = 0;
while (index < numbers.length) {
    numbers [index] =  numbers[index] * 1.6;
    index++;
}
console.log(numbers);
     */

//-------------------

// for each method

/* let numbers = [4, 9, 16, 25, 36];

numbers.forEach((number, index, numbers) => {
    numbers[index] = number * 1.6;
    
});

console.log(numbers);
 */
//-----------------------

//map method 

/* let numbers = [4, 9, 16, 25, 36];

numbers = numbers.map(number => number * 1.6);
console.log(numbers); */

//--------------------------------

/* Given an array of values , where each values represents the age of the person , you need to square each age value and keep only the ages greater than or equal to 18(adults). Finally , reduce the lisdt of ages to calculate the average age of the adults.

ages = [3, 12, 18, 20, 30, 45, 60, 70;]*/


/* let ages = [3, 12, 18, 20, 30, 45, 60, 70];

let filteredAges = ages.map(age => age ** 2 % 101).filter(age => age >= 18);

console.log(Math.floor(filteredAges.reduce((prevAge, currAge) => prevAge + currAge) / filteredAges.length));

 */

let numbers = [3, 4, 6, 7, 8, 1, 2, 5];

//numbers.push(10);
numbers.unshift(11);
numbers.pop();
numbers.shift();
//numbers.splice(2, 0, 9, 10);

console.log(numbers.slice(1,4));
