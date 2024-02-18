//This constants are used to manipulate the DOM of the index test page just to have an interface to 
//ilustrate the use of the actual conversion script
const answerDiv = document.querySelector('.answer');
const answerParaghaph = document.createElement("P");
const convertBtn = document.getElementById("convert-btn");
const inputBox = document.getElementById("input");


//The romanChar function receives a roman character and returns the
//respective integer.
function romanChar(roman) {
  if (roman === "I") {
    return 1;
  } else if (roman === "V") {
    return 5;
  } else if (roman === "X") {
    return 10;
  } else if (roman === "L") {
    return 50;
  } else if (roman === "C") {
    return 100;
  } else if (roman === "D") {
    return 500;
  } else if (roman === "M") {
    return 1000;
  } else {
    return 0;
  }
}

//The function convertRoman converts a given roman number to the respective integer
function convertRoman(roman) {
  let sum = romanChar(roman[0]);
  let temp = 0;
  for (i = 0; i <= roman.length - 1; i++) {
    if (romanChar(roman[i]) >= romanChar(roman[i + 1])) {
      sum = sum + romanChar(roman[i + 1]);
    } else {
      sum = sum - romanChar(roman[i]);
      temp = romanChar(roman[i + 1]) - romanChar(roman[i]);
      sum = sum + temp;
    }
  }
  return sum;
}


function executeConversion(){
  inputBox.value = convertRoman(inputBox.value);
}

convertBtn.addEventListener("click", executeConversion);