var events=require('events');
var util=require('util');

var person=function(name){
    this.name=name;
}
util.inherits(person,events.EventEmitter);
var jothi= new person('jo');
var kom = new person('koms');
var People=[jothi,kom];
People.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name +'said' + msg)
    })
})
jothi.emit('speak','Hello Everyone');
kom.emit('speak','Hello Everyone');