// 1.
let firstName =  "Tamara"
let lastName = "ThankGod"
let country = "Nigeria"
let city = "Benin"
let age = 23
let isMarried = false
let year = 2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 2.
let str = '10'
let num = 10
if(str == num) {
    console.log('true')
} else  {
    console.log('false')
}

// 3.
console.log('9.8' == 10)


// 4.
console.log( 2 < 3)
console.log( 2 < 3 || 3 > 4)
console.log( 10 > 2 && 7 > 5 )

console.log( 9 == 4)
console.log( 3 < 2 || 3 > 4)
console.log( 2 > 5 && 8 < 5)

// 5.
console.log( 4 > 3)
console.log( 4 >= 3)
console.log( 4 < 3)
console.log( 4 <= 3)
console.log( 4 == 4)
console.log( 4 === 4)
console.log( 4 != 4)
console.log( 4 !== 4)
console.log( 4 !== '4')
console.log( 4 == '4')
console.log( 4 === '4')
let py = 'python'
let pyLength = py.length
let js = 'javascript'
let jsLength = js.length
console.log(pyLength == jsLength)


// 6
console.log( 4 > 3 && 10 < 12 )
console.log( 4 > 3 && 10 > 12 )
console.log( 4 > 3 || 10 < 12 )
console.log( 4 > 3 || 10 > 12 )
console.log(!(4 > 1))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let dra = 'dragon'
console.log(dra.includes('on'), py.includes('on'))


// 7.
let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(Date.now())
