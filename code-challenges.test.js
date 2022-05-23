// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.



// ______________________q1_______________________________________



// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


	// create a describe it with the outcome of expect for the given variables num1 num2 num3

		describe("number", () => {
			it("will return if a number is divisible by 3", () => {
				expect(number(num1)).toEqual("15 is divisible by 3")
				expect(number(num2)).toEqual("0 is divisible by 3")
				expect(number(num3)).toEqual("-7 is not divisible by 3")
			})
		})

//  ● number › will return if a number is divisible by 3

    // ReferenceError: number is not defined

// I failed the test. (this is the only time I've ever been happy about failing something)

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.
	// create a function called number
	// make a condition with if
	// conditions should be met with a % 3
	//  follow by a return string with iteration
	 //follow by an else for the numbers not divisible by 3 

		const number = (odd) => {
			if(odd % 3  === 0){
				return `${odd} is divisible by 3`
			} else{
				return`${odd} is not divisible by 3`
			}
		}

		// I passed 

// 		 PASS  ./code-challenges.test.js
//   number
//     ✓ will return if a number is divisible by 3 (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.298 s, estimated 1 s
 
 //  Refactor 

		//  I cannot find a way to refactor this. I've looked up pages but am a little confused with what they mean 

		// https://www.geeksforgeeks.org/7-code-refactoring-techniques-in-software-engineering/

		// https://betterprogramming.pub/the-art-of-refactoring-5-tips-to-write-better-code-3bc1f6f7689

		// i believe I have a clean code. 	

		//  i even tried looking this up in google 
			// how to code two returns in one javascript
			// and got this 
				// Summary
			// JavaScript doesn't support functions that return multiple values. However, you can wrap multiple values into an array or an object and return the array or the object.
			// Use destructuring assignment syntax to unpack values from the array, or properties from objects.



// ________________________end q1________________________________



// ________________________q2____________________________________


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

	// make a describe it with the expected outcome of ever first letter of the strings in the array to be capitalized.

		describe("caps",() => {
			it("Outputs each string with the first letter capitalized", () => {
				expect(caps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
				expect(caps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
			})
		})

		// I failed again! Yassss 
		  // ● caps › Outputs each string with the first letter capitalized

    // ReferenceError: caps is not defined



const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

		// create  function called caps
		// create  variable within the function called capitals
		// In the variable use .map to map out the values of the array 
		// return with a value of the index at 0 and with .toUpperCase to capitalize the letter in that index
		// follow by a + value.substring() to label from where the string is going to be added to it so we use 1
		//  return with the variable capitals

		const caps = (first) => {
    	let capitals = first.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
   
    return capitals
}

// test passed
// 	 PASS  ./code-challenges.test.js
//   number
//     ✓ will return if a number is divisible by 3 (2 ms)
//   caps
//     ✓ Outputs each string with the first letter capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.275 s, estimated 1 s


// refactor

	// I need help with learning how to refactor. Everything I keep finding is about the same as those links I sent above.
	// but I hope this is good.

				// 	const caps = first => {
    // 	let capitals = first.map(value => value[0].toUpperCase() + value.substring(1)
    // }
   
    // return capitals

    // I tried this, but it didn't work. I couldn't get the return capitals to work else where.


// ________________________end q2_____________________________
		
		


// _________________________q3_________________________________

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

	


// a) Create a test with expect statements for each of the variables provided.
	
	//  make a describe it function with and expect of the outcome being the first vowel in each string.

		describe("string", () => {
			it("each variables string will output the index of the first vowel", () => {
				expect(string(vowelTester1)).toEqual(1)
				expect(string(vowelTester2)).toEqual(0)
				expect(string(vowelTester3)).toEqual(2)

			})
		})

// // // I failed yet again.
// // 	 // ● string › each variables string will output the index of the first vowel

// //   //   ReferenceError: string is not defined



const vowelTester1 = "learn"
// // // Expected output: 1
const vowelTester2 = "academy"
// // // Expected output: 0
const vowelTester3 = "challenges"
// // // Expected output: 2


// // // b) Create the function that makes the test pass.

// // 	// create a function called string 
// // 	// 


	// const string = (vowel) => {
	// 	for(let i = 0; i < vowel.length; i++)
	// 		if(vowel.charAt(i) === "e" || vowel.charAt(i) === "a"){
	// 			vowel += 1
	// 		}
	// }
	// 			return string.indexOf()

			const string = (vowel) => {
				let firstOnes = vowel.search(/[a,e,i,o,u]/);{
					return firstOnes
				}
			}
				








