//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let allLove = /love/gi
let loveCount = sentence.match(allLove).length
console.log(loveCount)

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentenceTwo = "You cannot end a sentence with because because because is a conjunction"
let allBecause = /because/gi
let becauseCount = sentenceTwo.match(allBecause).length
console.log(becauseCount)

/*3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/
let quote = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"



//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let sentenceThree = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
// extracting the numbers from the sentence
let pattern = /\d+/g;
let numbs = sentenceThree.match(pattern)
console.log(numbs)

// converting numbs from  string to number datatype
let num1 = parseInt(numbs[0])
console.log(num1)
let num2 = parseInt(numbs[1])
console.log(num2)
let num3 = parseInt(numbs[2])
console.log(num3)

// getting the total annual income
console.log(num1 + num2 + num3)
// or
let totalIncome = num1 + num2 + num3
console.log(totalIncome)