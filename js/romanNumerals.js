//exports.toRoman = function(num) 


function toRoman(num){

    let numberOfI;
    let newRoman = "";
    let answer;
    let romanNumerals = {

        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    while (num > 0){
    for (let roman in romanNumerals){
        if (romanNumerals[roman] > num) continue; // Skips all iterations where no calculation will be needed.
        newRoman += roman;
        // console.log(num);
        num -= romanNumerals[roman];
        break; // ends the loop, and causes it to restart because num is greater than 0
    }
}
    console.log(newRoman); // Visual aid
    return newRoman;

};
toRoman(2);






// Given a number in today's numbers, (Arabic Numeral), return its equivalent in Roman Numerals in the lazy way. Lazy Roman Numerals is where Roman Numerals are added together (9 is `VIIII`, 4 is `IIII`). Here are Roman Numerals with their Arabic Numeral counterparts:

// ```
// I -> 1
// V -> 5
// X -> 10
// L -> 50
// C -> 100
// D -> 500
// M -> 1000
