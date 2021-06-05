function makeCanvas(){
    var canvas5 = document.getElementById('canvas5');
var ctx5 = canvas5.getContext('2d');


var posx=0;
setInterval(function(){
posx+=1;
    ctx5.fillStyle='DeepSkyBlue';
    ctx5.fillRect(0,0,canvas5.width,canvas5.height);

    ctx5.fillStyle="white";

    ctx5.beginPath();
    ctx5.fillRect(posx,0,135,135);
    ctx5.fill();
   if(x>canvas5.width){
       posx=1;
   } 
},30)
}