var arr = ["수성", "금성", "지구", "화성", "목성", "토성","천왕성", "명왕성" ];
let fs = require('fs');
var index = fs.readFileSync("/dev/stdin").toString()
console.log(arr[index-1]);