// feet to cm formula (feet * 30.48)
// inch to cm formula (inch * 2.54)

var feet = document.getElementById("feetInput");
var inch = document.getElementById("InchInput");
var weight = document.getElementById("weightInput");
var button = document.getElementById("buttons")



button.addEventListener("click", function(e){
  e.preventDefault()
  var feetcalc = (feet.value) * 30.48;

  // var inchcalc = inch.value * 2.54;
  // var feetInchAdd = (feetcalc + inchcalc);

    
  var meterConv = feetcalc/100
  var metersquare = meterConv * meterConv

  var weightConv = weight.value; 

  var finalOutput = weightConv/metersquare
  var finalOutputWithTwoNumber = finalOutput.toFixed(2)

document.querySelector("#output").innerHTML = "Your BMI is : " + finalOutputWithTwoNumber;

if(feet.value == "" && weight.value == ""){
  alert("Please Enter feet & Weight")
}


})