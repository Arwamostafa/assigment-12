$(".headsing").ready(function(){
     $('.sec').not($(this).next()).slideUp(0);
     $('#title1').slideDown(0);
})
$("#sideBar span" ).ready(function(){
    let width=$(".inner").innerWidth();
    $("#sideBar").css({left:-width})
})

$(".headsing").click(function(){
    
    $('.sec').not($(this).next()).slideUp(100);
    $(this).next().slideToggle(100);
    
})

$("#sideBar span" ).click(function(){
    
    $("#sideBar").animate({left:'0px'}, 1000)
})

$(".close").click(function(){
    let width=$(".inner").innerWidth();
    $("#sideBar").animate({left:-width},1000 )
})

$("a").click(function(eventInfo){
    let aherf=eventInfo.target.getAttribute("href");
    let section=$(aherf).offset().top;
    $("body").animate({scrolltop:section},6000)
})


var countDownDate = new Date("oct 7, 2023 15:37:25").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
var distance = countDownDate - now;
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let temp=`<div class="col-md-3 con1  ">
      <div class="bordertim w-75 ">${days }D</div>
      </div>
    <div class="col-md-3 con2 ">
      <div class="bordertim w-75 "> ${hours}H</div>
     </div>
     <div class="col-md-3 con3 ">
       <div  class="bordertim w-75 ">${minutes}m</div>
      </div>
    <div class="col-md-3 con4 ">
      <div  class="bordertim w-75 ">${seconds}s</div>
    </div>`
  
  document.getElementById("demo").innerHTML = temp

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $(".num").text("your available character finished");
                
            }
        else{
        
        $(".num").text(AmountLeft);
        }
});
