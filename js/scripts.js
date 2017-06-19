//business logic
var numArrays=[];
var pingpong=function(num){
   for(var x=1;x<=num;x++){
     if(x % 15===0){
        numArrays.push("pingpong");
     }else if (x % 5===0) {
        numArrays.push("pong");
     }
     else if (x % 3===0) {
        numArrays.push("ping");
     } else {
        numArrays.push(x);
     }
   };

};

//user interface logic
$(document).ready(function(){
   $("form#fame").submit(function(event){
      event.preventDefault();
      var num=parseInt($("input#slow").val());
      $("#swim").text("");
      pingpong(num);
      numArrays.forEach(function(num){
        $("#swim").append('<li>' + num + '<li>');

      });

  });
});
