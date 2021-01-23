let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, currentValue) => {
    console.log(`accumulator : ${accumulator}`);
    console.log(`currentValue : ${currentValue}`);
    console.log(`                              `);

    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== currentValue) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log(result); 
//[1,2,3,4,5]