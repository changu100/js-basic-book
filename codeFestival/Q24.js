output("수성");
function output(num1){
    var korean =["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성" ];
    var Eng = ["Mercury" , "Venus", "Earth","Mars" , "Jupiter","Saturn","Uranus","Neptune"];
    var i;
    for(i = 0 ; i < korean.length ;i++){
        if(korean[i] == num1)
            break;
    }
    console.log(Eng[i]);
}