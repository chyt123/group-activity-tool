var join = function() {
  var name = $('#username-text').val();
  console.log(name);
  $.post("/api/register", {"name": name} , function(data){
      if (data.name != undefined) {
        $("#connection-status").html("你好, " + data.name);
      } else {
        $("#connection-status").html("注册失败, 请重新注册");
      }
    },"json"//设置了获取数据的类型，所以得到的数据格式为json类型的
  );
}

var press = function() {
    $.post("/api/apply", function(data){
      if (data.success != undefined && data.success === true) {
        $("#circle").html("抢答成功");
        $("#circle").addClass("success");
      } else {
        $("#circle").html("抢答失败");
        $("#circle").removeClass("success");
      }
    },"json"//设置了获取数据的类型，所以得到的数据格式为json类型的
  );
}