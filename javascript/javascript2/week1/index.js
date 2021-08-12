//Find The Shortest Word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShortestWord(words) {
  return words.reduce((a, b) => {
    return a.length < b.length ? a : b;
  });
}
getShortestWord(danishWords);

//Find and count the Danish letters
// returns {total: 4, æ: 1, ø: 2, å: 1}
//Method-1
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
function countDanishLetters(str) {
  let arr = str.split("");
  let danish1 = 0;
  let danish2 = 0;
  let danish3 = 0;
  arr.forEach((a) => {
    switch (a) {
      case "å":
        danish1++;
        break;
      case "ø":
        danish2++;
        break;
      case "æ":
        danish3++;
        break;
    }
  });
  return `{total: ${
    danish2 + danish1 + danish3
  }, æ: ${danish3}, ø: ${danish2}, å:${danish1}}`;
}
//Method-2
function countDanishLetters2(str) {
  let arr = str.split("");
  let danish1 = 0;
  let danish2 = 0;
  let danish3 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "å") danish1++;
    if (arr[i] == "ø") danish2++;
    if (arr[i] == "æ") danish3++;
  }
  return `{total: ${
    danish2 + danish1 + danish3
  }, æ: ${danish3}, ø: ${danish2}, å:${danish1}}`;
}
//Method-3
function countDanishLetters3(str) {
  let arr = str.split("");
  let res = {};
  res.total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "å") res.hasOwnProperty("å") ? (res.å += 1) : (res.å = 1);
    if (arr[i] == "ø") res.hasOwnProperty("ø") ? (res.ø += 1) : (res.ø = 1);
    if (arr[i] == "æ") res.hasOwnProperty("æ") ? (res.æ += 1) : (res.æ = 1);
  }
  res.total = Object.values(res).reduce((a, b) => a + b);
  return res;
}
