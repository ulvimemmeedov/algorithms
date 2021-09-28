function isAnagram(a, b) {

    if (!a || !b) {

        console.log('a ve b yoxdur');

    } else {

        if (typeof a !== "string" || typeof b !== "string") {

            console.log("a ve b String deyil");

        } else {

            let splitString = a.split("").reverse().join("");

            if (splitString == b) {

                console.log(true);

            } else {

                console.log(false);

            }

        }

    }

}

let a = 'rat'
let b = 'car'


isAnagram(a, b);
