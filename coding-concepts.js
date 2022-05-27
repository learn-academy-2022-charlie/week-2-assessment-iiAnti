// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
 // console.log(cohort.split(""))

// a) Your answer:It will split the string into separate strings. For example, "b" "a" "v" and etc.

// b) Verify and explain: I was correct but also wrong. the .split accessor splits the string but it does it in an array of substings. this also now creates objects because a bunch of things in an array are called objects.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log Hello, LEARN Student
// b) Verify and explain:ahhhhhh. I was wrong. Looked back and realized I missed the return before the ``'s. Stupid little mistakes that I sometimes overlook. without the return, it's not gonna know what it's supposed to return.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: You will get all the values in the array multiplied by 2
// b) Verify and explain: I was correct. adding .map after the array tells it to look for the all the values in the array, which in this case are the numbers. then you do a value with a return => of *2. I saw in the syllabus that you don't need an actual return because the arrow implies that.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11 13 15
// b) Verify and explain: I was correct. Adding .filter kind of works like a for loop. it iterates through the array until it meets the conditions set for it which in this case was %2 !==0 which means that if a number divided by 2 leaves a remainder then output that number.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:j
// b) Verify and explain: I was wrong. I completely forgot that when it is in an array it is now an object, so the zeroth index is javascript. so then if it said .languages[1] it would have logged Ruby instead.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:student: George cohort:bravo year:2022
// b) Verify and explain: well I missed the learn{} but i did get the reset correct. making the variable learnStudent and making it new tells it that it's making a new structor but this time with the name george added to it. and the name george was added because in the constructor, we have the argument name wihc allows use to use that to changing th ename within the () of the new Learn().
