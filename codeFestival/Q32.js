output("안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.");
function output(str){
    var pos  = 0;
    var answer  = 0;
    for(var i = 0; i< str.length ; i++){
        pos = str.indexOf(' ',pos+1);
        
        if(pos == -1)
            break;
        answer++;
    }
    console.log(answer +1 );
}