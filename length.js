function hammingDistance(a, b) {
  
    if (a.length !== b.length) {
  
        throw new Error('Strings eyni uzunluqda olmalıdır');
  
    }
  
    let distance = 0;
  
    for (let i = 0; i < a.length; i += 1) {
  
        if (a[i] !== b[i]) {
  
            distance += 1;
  
        }
  
    }
  
    return distance;
  
}

console.log(hammingDistance("adac","aac"));