//business logic
var numArray=[];
var pingpong=function(num){
   for(var x=1;x<=num;x++){
     if(x % 15===0){
        numArray.push("pingpong");
     }else if (x % 5===0) {
        numArray.push("pong");
     }
     else if (x % 3===0) {
        numArray.push("ping");
     } else {
        numArray.push(x);
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
      numArray.forEach(function(num){
        $("#swim").append('<li>' + num + '<li>');

      });

  });
});
