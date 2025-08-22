function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = "";

  for (let key in obj) {
    let [symbol, value] = obj[key];

    // handle subtractive cases first
    if (symbol === "C" && num >= 900) {  // CM
      result += "CM";
      num -= 900;
    }
    if (symbol === "C" && num >= 400) {  // CD
      result += "CD";
      num -= 400;
    }
    if (symbol === "X" && num >= 90) {   // XC
      result += "XC";
      num -= 90;
    }
    if (symbol === "X" && num >= 40) {   // XL
      result += "XL";
      num -= 40;
    }
    if (symbol === "I" && num >= 9) {    // IX
      result += "IX";
      num -= 9;
    }
    if (symbol === "I" && num >= 4) {    // IV
      result += "IV";
      num -= 4;
    }

    // normal case
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
