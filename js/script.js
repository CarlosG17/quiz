/*global $*/
/*global answer*/

$(document).ready(function() {

    $("button").click(function() {
        console.log();
        var name = $("#name").val();
        var q1Result = $("#questionSan").val();
        var q2Result = $("#questionNii").val();
        var q3Result = $("#questionIchii").val();
        var totalScore = questionSan(q1Result) + questionNii(q2Result)+questionIchii(q3Result);
        console.log(totalScore);
         $("#answer").text(placement(totalScore));
         console.log(placement(totalScore));
         $("#clicker").hide();
    });
        
   function displayResult(techplacement,name, imgSrc){
        return $(".result").html("<h2>Congratulations, " + name + " you're going to be working at " + techplacement + "</h2>"+"<img src=" +imgSrc+">");
    }
    function questionSan(q1Result){             
        if (q1Result === "Mexico" || q1Result === "mexico") {
            return 2;
        }
        else if (q1Result === "Italia" || q1Result === "italia") {
            return 3;
        }
        else if (q1Result === "Americana" || q1Result === "americana") {
            return 4;
        }
        else if (q1Result === "Hispaniola" ||q1Result === "hispaniola") {
            return 5;
        }
        else {
            return 0;
        }
    }

    function questionNii(q2Result) {
        if (q2Result === "Burritos" || q2Result === "burritos") {
            return 2;
        }
        else if (q2Result === "Spaghetti" || q2Result === "spaghetti") {
            return 3;
        }
        else if (q2Result === "Burgers" || q2Result=== "burgers") {
            return 4;
        }
        else if (q2Result === "Mofongo" || q2Result === "Mofongo") {
            return 5;
        }
        else {
            return 0;
        }
    }

    function questionIchii(q3Result) {
        if (q3Result=== "Cemita" || q3Result === "cemita") {
            return 2;
        }
        else if (q3Result === "Pizza Time" || q3Result === "pizza time") {
            return 3;
        }
        else if (q3Result === "Tater Tots" || q3Result === "tater tots") {
            return 4;
        }
        else if (q3Result === "Rice, Chickens, and Beans" || q3Result=== "rice, chicken, and beans") {
            return 5;
            
        }
        else {
            return 0;
        }
    }

    function placement(totalScore,name) {
        var Foof;
        var imgSrc;
        if (totalScore >= 6 && totalScore <= 8) {
            return "Mexican";
        }
        else if (totalScore >= 9 && totalScore <= 10 ) {
            return "Italia";
        }
        else if (totalScore >= 11 && totalScore <= 13) {
            return "American" ;
        }
        else if (totalScore >= 14 && totalScore <= 15) {
            return "Hispanic";
        }
        else{
            return "you must have done something wrong";
        }
    }
});