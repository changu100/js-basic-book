output("2");
function output(str){
    var arr = strToarray(str);
    
    console.log(arr[0])
    for(var i  =1 ; i< 10 ; i++)
        console.log(arr[0] * i);

}

function strToarray(str)
{
    var index =0;
    var string= "";
    var result = [];
    console.log(str);
    for(var i = 0; i< str.length ; i++){
        if( i == str.length-1){
            string += str[i];
            result[index] = parseInt(string);
            break;
        }
        else if(str[i] == " " ){
            result[index] = parseInt(string);
            index++;
            string = "";
        }
        else
            string += str[i];
        
    console.log(string);    
    }
    return result;
}