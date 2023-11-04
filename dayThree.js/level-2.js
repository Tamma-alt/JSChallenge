1.
let constant = 0.5
let base = prompt('Enter the base of the triangle')
let height = prompt('Enter the height of the triangle')
let areaOfTriangle = constant * base * height;
console.log('The area of the triangle is:',areaOfTriangle)


// 2.
let a = parseInt(prompt('Enter the a of the triangle'))
let b = parseInt(prompt('Enter the b of the triangle'))
let c = parseInt(prompt('Enter the c of the triangle'))
let perimeterTri = a + b + c;
console.log('The perimeter of the triangle:',perimeterTri)


// 3.
let length = parseFloat(prompt('input the length of the rectangle'))
let width = parseFloat(prompt('input the width of the rectangle'))
let perimeterRec =  2 * (length + width)
let area = length * width
console.log(area)
console.log(perimeterRec)


// 4.
let radius = parseFloat(prompt('enter radius'))
let areaOfCircle = Math.PI * radius * radius 
let circumference = 2 * Math.PI * radius
console.log(areaOfCircle)
console.log(circumference)


// 5.
// y = 2x - 2



// 8.
// y = x2 + 6x + 9
let x = parseFloat(prompt("Enter x"))
let y = (x ** 2) + (6 * x) + 9
console.log(y)

// 9.
let hours = parseFloat(prompt("Enter number of hours"))
let rate = parseFloat(prompt("Enter number of rate"))
let pay = hours * rate
console.log(pay)


// 10.
let userName = prompt("enter your name")
if(userName.length > 7) {
    alert("your name is too long")
} else {
    alert("Your name is too short")
}

// 11.
let firstName = prompt("enter your firstname")
let lastName = prompt("enter your lastname")
let firstNameLength = firstName.length
let lastNameLength = lastName.length
if (firstNameLength > lastNameLength) {
    alert(`Your firstname ${firstName}, is longer than your family name${lastName}`)
} else {
    alert(`Your family name, ${lastName} is longer than your firstname ${firstName}`)
}

// 12.
let myAge = 250
let yourAge = 25
let ageGap = myAge - yourAge
console.log(`I am ${ageGap} older than you`)

// 13.
let birthYear = parseFloat(prompt("Enter year of birth"))
let currentYear = new Date().getFullYear()
let age =  currentYear - birthYear
let youngAge = 18 - age
if (age >= 18){
    alert(`You are ${age}. You are old enough to drive`)
} else {
    alert(`You are ${age}. You will be allowed to drive after ${youngAge}`)
}

// 14.
let numberOfYears = parseFloat(prompt("Enter number of years lived"))
let seconds = 60 * 60 * 24 * 365
let secondsLived = seconds * numberOfYears
alert(`You have lived ${secondsLived} seconds`)


// 15.
let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()
let date = today.getDate()
let hour = today.getHours()
let minutes = today.getMinutes()
alert(`${year}-${month}-${date} ${hour} : ${minutes}`)
alert(`${date}-${month}-${year} ${hour} : ${minutes}`)
alert(`${date}/${month}/${year} ${hour} : ${minutes}`)