output("176 156 155 165 166 169");
function output(str){
    var arr = strToarray(str);
    var guide = arr.slice();
    console.log(arr);
    guide.sort(function(a,b){return a-b;}); 
    
    for(var i  =0 ; i< arr.length ; i++)
        if(arr[i] != guide[i]){
            console.log("NO");
            return;
        }

    console.log("YES");
}

function strToarray(str)
{
    var index =0;
    var string= "";
    var result = [];
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