function one(n){
    function two(a){
        //pass
        console.log("two")
        var sum = a;
        for(var i = 0 ;i < n-1 ; i++)
            sum *= a;
        return sum;
    }
    console.log("one")
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log("start")
console.log(a(10));
console.log(b(10));
console.log(c(10));
