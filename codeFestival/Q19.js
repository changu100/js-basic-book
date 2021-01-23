
output(10,5);

function output(num1, num2){
    var answer = 1;
    if(num2 == 0)
        answer = 1;
    for(var i = 0; i < num2; i ++)
        answer *= num1; 
    console.log(parseInt(answer));
}