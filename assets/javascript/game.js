$(document).ready(function() {

var randomNumber = ((Math.floor(Math.random() * 100) + 19)) ;
var wins = 0;
var losses = 0;

var randomnumberEl = $("#randomNumber");
var winsEl = $("#wins");
var lossesEl = $("#losses");
var totalScoreEl = $("#totalScore");
var total = 0; 

$("#randomNumber").html(randomNumber)
        var num1 = Math.floor(1 + (Math.random() * 12));
   $("#jewel1").click(function() {  
        total += num1;
        checkNumber(); 
        $('#totalScore').val(num1);
        $("#totalScore").html(total);
        console.log(num1);
        });
        var num2 = Math.floor(1 + (Math.random() * 12));
    $("#jewel2").click(function() {   
        total += num2;
        checkNumber();
        $('#totalScore').val(num2);
        $("#totalScore").html(total);
        console.log(num2);
        });
        var num3 = Math.floor(1 + (Math.random() * 12));
    $("#jewel3").click(function() {  
        total +=num3; 
        checkNumber();
        $('#totalScore').val(num3);
        $("#totalScore").html(total);
        console.log(num3);
        });
        var num4 = Math.floor(1 + (Math.random() * 12));
    $("#jewel4").click(function() {   
        total += num4;
        checkNumber();
        $('#totalScore').val(num4);
        $("#totalScore").html(total);
        console.log(num4);
        // console.log(this);
        // $(this).addClass("red-button");
    }); 

function checkNumber(){
    if (randomNumber === total) {
        wins+=1;
        total="";
        randomNumber = ((Math.floor(Math.random() * 100) + 19)) ;
        num1 = Math.floor(1 + (Math.random() * 12));
        num2 = Math.floor(1 + (Math.random() * 12));
        num3 = Math.floor(1 + (Math.random() * 12));
        num4 = Math.floor(1 + (Math.random() * 12));
        alert ('You won! Keep playing.');
        $("#wins").html(wins);
        $("#totalScore").html(total);
        $("#randomNumber").html(randomNumber);
    }
    else if (randomNumber < total) {
        losses+=1;
        total="";
        randomNumber = ((Math.floor(Math.random() * 100) + 19)) ;
        num1 = Math.floor(1 + (Math.random() * 12));
        num2 = Math.floor(1 + (Math.random() * 12));
        num3 = Math.floor(1 + (Math.random() * 12));
        num4 = Math.floor(1 + (Math.random() * 12));
        alert ("You lost... Play again.");
        $("#losses").html(losses);
        $("#totalScore").html(total);
        $("#randomNumber").html(randomNumber); 
    }
    // return true;
}

// function check() {
// if (checkNumber === true) {
//     console.log ("test");
//     var randomNumber = Math.floor(Math.random() * 120) + 1 ;
//     total = 0;
//     $("#totalScore").html(total);
//     $("#randomNumber").html(randomNumber);    
//     }   
// };
// function reset() {
//     if (randomNumber === total || randomNumber < total) {
    // var randomNumber = Math.floor(Math.random() * 120) + 1 ;
    // total = 0;
    // $("#total").html(total);
    // $("#randomNumber").html(randomNumber);
});
