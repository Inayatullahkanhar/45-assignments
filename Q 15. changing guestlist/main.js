"use strict";
// Use GuestList of exercise 14
let guestList = ["Ahmed", "Inayat", "Waqar", "Asad"];
// replace new guest
let absentGuest = guestList[1];
// Print the message
console.log(absentGuest, "can't come to party");
// Remove and Add guest in list
guestList.splice(1, 1, "Sarmad");
// inivitation message for new guest
guestList.forEach(guestList => {
    console.log(`hello ${guestList},would you like to dinner with me?`);
});
