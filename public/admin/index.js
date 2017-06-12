var getAll = function() {
  $.get("/api/getAll", function(data) {
    $("#status").html(JSON.stringify(data));
  }, "json");
};

var getWinners = function() {
  $.get("/api/getWinner", function(data) {
    $("#status").html(JSON.stringify(data));
  }, "json");
};

var reset = function() {
  $.post("/api/reset", function(data) {
    $("#status").html(JSON.stringify(data));
  }, "json");
};