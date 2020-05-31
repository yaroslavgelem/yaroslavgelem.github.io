var _word = prompt("Введіть слово: ");
function sumSumbol(_word) {
  var result = {};
  for (var i in _word) {
    if (result.hasOwnProperty(_word[i])) {
      result[_word[i]] += 1;
    } else {
      result[_word[i]] = 1;
    }
  }
  return result;
}
console.log(sumSumbol(_word));
