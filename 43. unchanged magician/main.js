"use strict";
// Repeat step of Exercise 42
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Call function make great 2 
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
const magicians3 = ['Ainak wala jin', 'Kachra rani', 'Commandor safeguard', 'Zakootta'];
const greatMagicians2 = make_great2(magicians3);
// Print Orginal magicians names
console.log("\nOrginal magicians:");
show_magicians(magicians3);
// Print Great magicians names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians2);
