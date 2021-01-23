var INF = 1000000000;

var number = 6;
var a = [[0,2,5,1,INF ,INF]
,[2,0,3,2,INF,INF]
,[5,3,0,3,1,5]
,[1,2,3,0,1,INF]
,[INF,INF,1,1,0,2]
,[INF,INF,5,INF,2,0]
]

var v = new Array(6);
var d = new Array(6);

for(var i = 0; i < number ; i++){
    v[i] = false;
    d[i] = 0;
}

console.log(a);


dijkstra(0);

function getSamllIndex(){
    var min = INF;
    var index = 0; 
    for(var i = 0; i < number; i ++){
        if(d[i] < min && !v[i]){
            min = d[i];
            index = i;
        }
    }
    return index;
}

function dijkstra(start){
    for(var i = 0; i< number ; i++)
        d[i] = a[start][i];
    
    v[start] = true;
    for(var i = 0 ; i < number - 2; i++){
        var current = getSamllIndex();
        console.log(i , current);
        console.log(d);
        console.log(v);
        v[current] = true;
        for(var j = 0 ; j < number ; j ++){
            if(!v[j]){
                if(d[current] + a[current][j] < d[j]){
                    d[j] = d[current] + a[current][j];
                }
            }
        }
    }
}
