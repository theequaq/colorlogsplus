
var fs = require("fs");
var Logger = (exports.Logger = {});
//Discord logger
const now = new Date();
var time = `${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`;
//command colors COOL XD
//$rs Resets the color
//$bl Make the color black
//$bold Makes the dont bold!
//$r Makes the color red
//$g Makes the color green
//$y Makes the color yellow
//$b Makes the color blue
//$m Makes the color magenta
//$c Makes the color cyan
//$w Makes the color white
//$un Make a line under the text!
Logger.event = function(msg){
if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a command log!", '\033[0m');
var err = require("./logs/event").event;
err.message(msg);
}
Logger.log = function(msg) {
  if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a log!", '\033[0m');
  var err = require("./logs/log").log;
  err.message(msg);
  };
Logger.ready = function(msg){

  if(!msg){
      var message = "READY!";
      console.log(`[${time}][READY!]`);
  }else{ 
    var err = require("./logs/ready").ready;
    err.message(msg);
  }

};
Logger.command= function(msg) {
if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a command log!", '\033[0m');
var err = require("./logs/command").command;
err.message(msg);
};
Logger.info = function(msg) {
  if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a info log!", '\033[0m');
  var err = require("./logs/info").info;
  err.message(msg);

};
Logger.debug = function(msg) {
  if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a debug log!", '\033[0m');
  var err = require("./logs/debug").debug;
  err.message(msg);
};
Logger.error = function(msg) {
  if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a error log!", '\033[0m');
var err = require("./logs/error").err;
err.message(msg);
};







Logger.test = function(msg){
  if(!msg) return console.log("\033[31m["+time+"][ERROR]- You have not added a test log!", '\033[0m');
  var err = require("./logs/test").test;
  err.message(msg);
}










