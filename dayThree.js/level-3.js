let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()
let date = today.getDate()


let hour = today.getHours()
hour < 10 ? '0' + hour.toString(): hour;
let minutes = today.getMinutes()
minutes < 10 ? '0' + minutes.toString(): minutes;
alert(`${year}-${month}-${date} ${hour} : ${minutes}`)
