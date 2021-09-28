function EBOB(x, y) {

    if ((typeof x !== 'number') || (typeof y !== 'number'))

        return false;

    return (!x || !y) ? 0 : Math.abs((x * y) / EKOB(x, y));

}

function EKOB(x, y) {
    
    x = Math.abs(x); //3
    
    y = Math.abs(y); //15

    while (y) {    // == 0 olduqda dayanir x return edir
    
        var t = y; // 15 , 3
    
        y = x % y; // 3 , 0
    
        x = t;     // 15 , 3
    
    }
    
    return x; // x = 3

}

console.log(EKOB(3, 15));

console.log(EBOB(3, 15));

// console.log(15 * 3 / 3);


