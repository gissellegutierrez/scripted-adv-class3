$(function() {
  console.log("JavaScript is working on this site! Cool!");


  //-----------------------------------------------------------------------------------
  // convertToRomanNumeral function takes number as a parameter 
  // and returns a Roman numeral
  // 
  // 100 | C 
  // 90  | XC
  // 50  | L
  // 40  | XL
  // 10  | X
  // 9   | IX
  // 5   | V
  // 4   | IV
  // 1   | I

  function convertToRomanNumeral(number) {
    console.log("Number = " + number);
    // var output = "";
    // if (number == "1") {
    //     output = "I"
    // } else if (number == "2"){
    //           output = "II"
    // } else if (number == "3"){
    //           output = "III"
    // } else if (number == "4"){
    //           output = "IV"
    // }else if (number == "5"){
    //           output = "V"
    // }else if (number == "6"){
    //           output = "VI";
    // }else if (number == "7"){
    //           output = "VII";
    // }else if (number == "8"){
    //           output = "VII";
    // }else if (number == "9"){
    //           output = "VX";
    // } else if (number == "10"){
    //           output = "X";
    // } else {
    //   output = ":(";
    // }
  
  var output = "";
  while (number > 0){
    if (number >= 100) {
      output += "C"
      number -= 100; 
    } else if (number > 90) {
     output +="XC"
     number -= 90
    } else if (number > 50) {
     output += "L" 
     number -= 50
    } else if (number > 40) {
     output += "XL" 
     number -= 40
    } else if (number > 10) {
     output += "X" 
     number -=10
    } else if (number > 9) {
     output += "IX" 
     number -= 9
    } else if (number > 5) {
     output += "V" 
     number -= 5
    } else if (number > 4) {
     output += "IV" 
     number -=4
    } else if (number > 1) {
     output += "I" 
     number -= 1
     }
     {
     return output;
  }
    
  


  //-----------------------------------------------------------------------------------
  // Convert the number input when the button is 
  
  

  var $button = $("button");
  var $numberInput = $("#number_input");
  var $romanNumeralOutput = $("#roman_numeral_output");

  $button.on("click", function(e){
    e.preventDefault();
    numberVal = $numberInput.val();
    romanNumeralVal = convertToRomanNumeral(numberVal);
    console.log("Roman numeral = " + romanNumeralVal);
    $romanNumeralOutput.val(romanNumeralVal);
  });

});
