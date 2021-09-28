// n! = n * (n-1) * (n-2) * ... * 1

const factorial = (n) => {

    if (n == 0) {

        return 1
    
    }

    return n * factorial(n-1)

}

console.log(factorial(5));


// 5 * (5-1) * (4-1) * (3-1) * (2-1) * 1