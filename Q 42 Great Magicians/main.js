"use strict";
// Greet Magicians
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Make function called make great
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        // Add the great to each magician name
        magicians[i] = magicians[i] + ' the Great';
    }
}
const magicians2 = ['Ainak wala jin', 'Zakootta', 'Kachra rani', 'Commandor safeguard'];
make_great(magicians2);
show_magicians(magicians2);
