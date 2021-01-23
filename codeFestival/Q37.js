output("원범 원범 혜원 혜원 혜원 혜원 유진 유진");
function output(str){
    var arr = strToarray(str);
    
    let result = arr.sort().reduce((accumulator, currentValue) => {    
        const length = accumulator.length
        if (length === 0 || accumulator[length - 1] !== currentValue) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);

    console.log(result);

    var resultcnt  = [];
    var cnt, index;
    var max = 0;
    for(var i = 0 ; i < result.length ; i++){
        cnt = 0;
        for(var j = 0 ; j < arr.length; j++){
            if(result[i] == arr[j])
                cnt++;
        }
        if(cnt > max){
            max = cnt;
            index = i;
        }
        resultcnt.push(cnt);
    }
    console.log(result[index],"(이)가 총", resultcnt[index],"표로 반장이 되었습니다.");


}


function strToarray(str)
{
    var index =0;
    var string= "";
    var result = [];
    for(var i = 0; i< str.length ; i++){
        if( i == str.length-1){
            string += str[i];
            result[index] = string;
            break;
        }
        else if(str[i] == " " ){
            result[index] = string;
            index++;
            string = "";
        }
        else
            string += str[i];
        
    }
    return result;
}