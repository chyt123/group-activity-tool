var map = {};
var flag = false;
var winner = [];
var currentWinner;

var put = function(ip, name) {
  map[ip] = name;
}

var get = function(ip) {
  return map[ip];
}

var getAll = function() {
  console.log(map);
  return map;
}

var apply = function(ip) {
  if (map[ip] == undefined)
    return false;
  
  if (ip === currentWinner) {
    return true;
  }
  
  if (flag) {
    winner.push(map[ip]);
    currentWinner = ip;
    flag = false;
    return true;
  }
  return false;
}

var getWinner = function() {
  console.log(winner);
  return winner;
}

var reset = function() {
  flag = true;
  currentWinner = undefined;
  console.log(flag);
}

var getFlag = function() {
  return flag;
}

module.exports = {
  "put": put,
  "get": get,
  "getAll": getAll,
  "apply": apply,
  "getWinner": getWinner,
  "reset": reset,
  "getFlag": getFlag
}