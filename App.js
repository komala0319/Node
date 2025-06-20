//Golbal object

setTimeout(function(){
    console.log("Welcome to the Node js");},3000);
var time=0;
setInterval(function(){
    time+=3;
    console.log(time+'Second have passed');},3000);
    
  //for Reference
  console.log(__dirname);
  console.log(__filename);
  
  //Function Expressions
  var demo=function(){
    console.log("Hello World");
  }

demo();
function jothi(fun){
    fun();
}
jothi(demo);

//modules & require()
module.exports.counter =function(arr){
    return'There are' +arr.length+'Element in the array';
}
//console.log(counter(['CSK','RCB','MI']));
module.exports.subs =function(x,y){
    return`The sum of the 2Number ${x-y}`;
}

//Module Patterns
//module.exports.counter=counter;
//module.exports.subs=subs;


//module.exports={
//counter=counter,
//subs=subs
//};

//Event module
var jothi=require('events');
var myEmitter=new jothi.EventEmitter();
myEmitter.on('someEvent',function(Happyfriday){
    console.log(Happyfriday);
});
myEmitter.emit('someEvent',`the event was emitted`)
    