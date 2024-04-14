

// Equality and Inequality Test 1.
console.log("Equality with strings test: ", "Apple" === "Apple");

// Equality and Inequality Test 2.
console.log("Inequality with strings test: ", ("Apple" as string ) != "Orange");

// Numerical involving equality Test 3. 
console.log('\n',"Equality with numbers test: ", 26 === 26);

// Numerical involving inequality Test 4.
console.log("Inequality with numbers test:", (26 as number) != 35);

// Greater than Test 5.
console.log('\n',"Greater than test: ", 10 > 5);

// Less than Test 6.
console.log("Less than test:", 5 < 10);

// Greater than and equal to Test 7. 
console.log('\n',"Greater than or equal to test:", 10 >= 10);

// Less than or equal to Test 8.
console.log("Less than or equal to test:", 5 <= 10);

// Using the Upper case function Test 9.
console.log('\n',"Upper case function test:", "hello". toUpperCase() === "HELLO");

// Using the lower case function Test 10.
console.log("Lower case function test: ", "HELLO". toLowerCase() === "hello");

// Using "AND" operator Test 11.
console.log('\n',"AND operator test: ", 5 === 5 && 10 > 5 );

// Using "OR" operator Test 12.
console.log("OR operator test:", 5 === 5 || 10 < 5 );

// Whether an item is in array Test 13.
const fruits :string[] = ['Apple' , 'Banana' , 'Coconut'];
console.log('\n','"Apple" in array test: ', fruits.includes("Apple"));
console.log('"Banana" in array test: ', fruits.includes("Banana"));
console.log('"Coconut" in array test:', fruits.includes("Coconut"));

// Whether an item is not in array Test 14.
console.log('\n', '"Apricot" is not in array test:' ,!fruits.includes('Apricot'));
console.log('"Bilberry" is not in array test:' ,!fruits.includes('Bilberry'));
console.log('"Cherry" is not in array test:' ,!fruits.includes('Cherry'));
