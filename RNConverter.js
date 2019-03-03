function toRoman(number) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var i = 0; i<=decimal.length; i++) {
    //looping over every element of our array
    while (decimal[i] <= number){
      //trying same number
      result += roman[i];
      //result = result + roman number
      number -= decimal[i];
      //num = num - decimal number
    }
  }
  return result;
}


function fromRoman(string){
  console.log(string);
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var i = 0; i<=decimal.length; i++){
    while (string.indexOf(roman[i]) === 0){
      //checking for the first characters in the string
      result += decimal[i];
      //result = result + decimal[i];
      string = string.replace(roman[i], '');
      //remove the matched Roman letter from the beginning
    }
  }
  return result;
}
