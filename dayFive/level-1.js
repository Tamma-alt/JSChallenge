// 1.
let arr = Array()

// 2.
const newArr = [1, 2, 3, 4, 5, 6, 7, 8]

// 3.
console.log(newArr.length)

// 4. 
console.log(newArr[0])
console.log(newArr[4])
console.log(newArr[7])

// 5.
const mixedDataTypes = ['bats', 3, 6.9, 'orange', [3, 6, 9], 'books']
console.log(mixedDataTypes.length)


// 6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 7.
console.log(itCompanies)
// 8.
console.log(itCompanies.length)
// 9.
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
// 10.
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// 11.
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// 12.
console.log(`${itCompanies} are big IT companies`)
// 13.
let confirm = itCompanies.includes('Oracle')
console.log(confirm)
if(confirm == true) {
    console.log('This company is available')
} else {
    console.log('This company is not found')
 }
15.
itCompanies.sort()
console.log(itCompanies)
// 16.
itCompanies.reverse()
console.log(itCompanies)
// 17.
let slicedItCompanies = itCompanies.slice(3)
console.log(slicedItCompanies)
// 18.
let slicedItCompanies2 = itCompanies.slice(0, 3)
console.log(slicedItCompanies2)
// 19. incorect
let middleSlice = itCompanies.slice(parseInt(itCompanies.length / 2))
console.log(middleSlice)
20.
itCompanies.shift()
console.log(itCompanies)
22.
itCompanies.pop()
console.log(itCompanies)

// please complete question 14,21,23 tomorrow