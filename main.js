function makeCanvas(){
    var canvas5 = document.getElementById('canvas5');
var ctx5 = canvas5.getContext('2d');


var posx=0;
setInterval(function(){
posx+=2;
    ctx5.fillStyle=" rgba(2, 2, 2, 0.068)";
    ctx5.fillRect(0,0,canvas5.width,canvas5.height);

    ctx5.fillStyle="white";

    ctx5.beginPath();
    ctx5.fillRect(posx,0,135,135);
    ctx5.fill();
   if(x>canvas5.width){
       posx=1;
   } 
},30)

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');


var posx2=-105;
setInterval(function(){
posx2+=1;
    ctx2.fillStyle="black";
    ctx2.fillRect(0,0,canvas2.width,canvas2.height);

    ctx2.fillStyle=" rgba(0, 0, 255, 0.374)";

    ctx2.beginPath();
    ctx2.fillRect(posx2,posx2,105,105);
    ctx2.fill();
   if(posx2>canvas2.height +20 ){
       posx2=-105;
   } 
  


},30)
}