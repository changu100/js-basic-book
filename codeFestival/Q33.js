output("1 2 3 4 5 6");
function output(str){
    var arr = strToarray(str);
    arr.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
      });
      
    console.log(arr);
}

function strToarray(str)
{
    var index =0;
    var string= "";
    var result = [];
    console.log(str);
    for(var i = 0; i< str.length ; i++){

        if(str[i] == " " ){
            result[index] = parseInt(string);
            index++;
            string = "";
        }
        else
            string += str[i];
            
    }
    return result;
}