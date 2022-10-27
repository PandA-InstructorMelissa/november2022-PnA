// Pull the current time
// Pull the current time
let current = new Date();    //Assign a variable and assign a new Date object
console.log("The Date Object:", current)

// Print date and time to html

//  Print to the html just the time
let time = current.toTimeString()
console.log("The time:", time)

// Print to the html just the date
let date = current.toDateString()
console.log("The date:", date)



// Change the time zone to not my EST
let pst = current.getUTCHours() -7
  //setTime() sets a date by adding milliseconds to January 1, 1970:
let pstHours = (current.getUTCHours() - 7)  //anyone feel free to adjust this idk if it's right
console.log('The time in PST is:', pst)

let pstHours2 = current.setTime(current.setHours(current.getHours()-3))


//We need some kind of DOM manipulation that I forgot how to do.... (JG)  Where are my front-end folks?

document.getElementById("date").innerHTML = current; //whatever the final variable is 

