
let guestList = ["Ahmed", "Inayat", "Waqar", "Asad"];

// replace new guest
let absentGuest = guestList[0];

// Print the message
console.log(absentGuest, "can't come to party");

// Remove and Add guest in list
guestList.splice(0 , 0, "Sarmad");

// more guests
guestList.push("Ali")
guestList.unshift("Waseem")
guestList.slice(0)

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

//  Using while-loop to remove guests from the array until only names remain
while(guestList.length >  2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");

guestList.forEach(guestList => {
    console.log(`luckily ${guestList}, you are invited for dinner.`)
});

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);