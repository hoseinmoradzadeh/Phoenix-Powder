var contstar=1;
var x = setInterval(function () {
var contend=14;
contstar++;
document.getElementById("value").innerHTML=contstar;
if (contstar>contend){
    clearInterval(x);
}
},50)


var majals=1;
var y = setInterval(function () {
    var maljend=20;
    majals++;
    document.getElementById("majls").innerHTML=majals;
    if (majals>maljend){
        clearInterval(y);
    }
},50)

var consert=1;
var z = setInterval(function () {
    var consertend=30;
    consert++;
    document.getElementById("consert").innerHTML=consert;
    if (consert>consertend-1){
        clearInterval(z);
    }
},50)