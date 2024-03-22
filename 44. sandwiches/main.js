"use strict";
// Write a function that accepts a array of items on a sandwich. 
function make_sandwich(...items) {
    // Print a summary of the sandwich that is being ordered
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your sandwich");
}
// Call the functions three times
make_sandwich('zingar', 'bonesless chicken', 'burger');
make_sandwich('mayonnaise', 'butter');
make_sandwich('Grilled Chicken');
