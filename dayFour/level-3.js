// 1.
let date = new Date().getFullYear()
console.log(date)
let month = prompt("Enter Month").toLowerCase();
let daysInaMonth;

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
} 

switch (month) {
case "september":
case "april":
case "june":
case "november":
daysInaMonth = console.log('30 Days');
break;

case "january":
case "march":
case "may":
case "july":
case "august":
case "october":
case "december":
daysInaMonth = console.log('31 Days');
break;

case "febuary":
    daysInaMonth = isLeapYear(year) ? 29 : 28;
    break;

    default:
        console.log('Enter a proper month')
}
