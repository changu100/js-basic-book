
var arr = ""
for(var i = 1; i< 6 ; i++){
    for(var j = 4 ; j>=i-1 ; j--)
        arr = arr + ' ';
    for(var j = 0 ; j< (2*i -1) ; j++)
        arr = arr + "*";
    
    console.log(arr);
    arr ="";
}
