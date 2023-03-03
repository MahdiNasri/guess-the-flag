  


var easy=['imag/France.jpg','imag/Algeria.jpg','imag/Spain.jpg','imag/Tunisia.jpg','imag/Romania.jpg']
var pays=['FRANCE','ALGERIA','SPAIN','TUNISIA','ROMANIA']


$(document).ready(function(){
    $('#button_flag').on("click",function(){ 
    $("#button_flag").text("Confirm")
    })  
var countrieArr=pays
var  currentArray= easy
var score = 0
var count = 0
$('#button_flag').on("click",function(){ 
  $(".drapeau")[0].src = currentArray[count]
    count++
  if(count===6){
    if(score>=3) {alert("you win")
    window.location.reload()}
    else if (score<3){alert("you lost")
    window.location.reload()}
  }
}) 
    $("#button_flag").click(function(){
        var guess = $("#box_flags").val()
        if(guess.toUpperCase()===countrieArr[count-2]){
            score++
            $('.label-score').text(score)
        }
    });
    $(".check-difficultie").click(function(){
        count= 0 
        var radioValue = $("input[class='check-difficultie']:checked").val() 
        if(radioValue==='easy'){         
            currentArray=easy
        }
    });
});


  