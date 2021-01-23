var a = 3;
var b= 2;
output("거꾸로");

function output(abc){
    var tmp = "";
    for(var i = abc.length -1 ; i >= 0 ;i--)
        tmp+=abc[i];

    console.log(tmp);
}