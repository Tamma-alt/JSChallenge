/*1.Using console.log() print out the following statement:
 The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
 console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")


/* 2.Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")


//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = "10";
let b = 10;
    console.log(typeof a)
    console.log(typeof b)
let newa = parseInt(a)
console.log(newa)


//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let newNumber = Math.round(9.8)
console.log(newNumber)


//5. Check if 'on' is found in both python and jargon
let first = 'python'
let second = 'jargon'
console.log(first.search('on'), second.search('on'))

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon."
console.log(sentence.search("jargon"))


//7.Generate a random number between 0 and 100 inclusively.
let num = Math.floor(Math.random() * 101) 
console.log(num)


//8.Generate a random number between 50 and 100 inclusively.
let nums = Math.floor(Math.random() * 51)
console.log(nums)


//9.Generate a random number between 0 and 255 inclusively.
let numbs = Math.floor(Math.random() * 256)
console.log(nums)


//10.Access the 'JavaScript' string characters using a random number.
let js = "JavaScript"
let randomChar = Math.floor(Math.random() * js.length -1)
console.log(randomChar)


//11.Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1\t 1\t 1\t 1\t 1" )
console.log("2\t 1\t 1 1 1" )
console.log("1 1 1 1 1" )
console.log("1 1 1 1 1" )
console.log("1 1 1 1 1" )


//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let paragraph = "You cannot end a sentence with because because because is a conjunction";
let newParagraph = paragraph.substr(paragraph.indexOf("beacuse", 1), ("because".length * 3) + 2)
console.log(newParagraph);
// no answer yet