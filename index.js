$("#info-button").click(function(){
 	alert("To calculate the hour : Add the values of red and blue squares.\n\n The minutes will be multiples of 5 in fibonacci clock.\n\n To calculate minutes : Add the values of green and blue squares and multiply the result with 5.\n\n In case of the absence of red and green squares or only the blue squares are to be found then the hours value will be the addition of values of blue squares and the minutes value will be the addition of values of blue squares * 5.");
});
var d = new Date();
var hrs = 0, mins = 0;
var firstHour = d.getHours(), firstMinute = d.getMinutes(), firstTime = true;
var setHours = function(h,m){
  switch (h) {
    case 0 :

      $(" #one1, #one2, #two, #three, #five").addClass("red");

      if (m > 0 && m <= 5) {
        $("#one2").addClass("blue");
      }

      else if (m > 5 && m <= 10) {
        $("#one1, #one2").addClass("blue");
      }

      else if (m > 10 && m <= 15) {
        $("#one1, #two").addClass("blue");
      }

      else if (m > 15 && m <= 20) {
        $("#one1, #one2, #two").addClass("blue");
      }

      else if (m > 20 && m <= 25) {
        $("#five").addClass("blue");
      }

      else if (m > 25 && m <= 30) {
        $("#one1, #five").addClass("blue");
      }

      else if (m > 30 && m <= 35) {
        $("#one1, #one2, #five").addClass("blue");
      }

      else if (m > 35 && m <= 40) {
        $("#three, #five").addClass("blue");
      }

      else if (m > 40 && m <= 45) {
        $("#one1, #three, #five").addClass("blue");
      }
      else if (m > 45 && m <= 50) {

        $("#two, #three, #five").addClass("blue");
      }

      else if (m > 50 && m <= 55) {
        $("#one1, #two, #three, #five").addClass("blue");
      }
