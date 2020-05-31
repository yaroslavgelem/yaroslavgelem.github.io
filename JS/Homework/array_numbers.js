var arrnum = [1, 5, -3, 8, 11, -17, 41, -56, 6, -1];

function max(arrnum) {
    var result = {
        max_positive: 0,
        min_negative: 0,
        sum_positive: 0,
        product_negative: 0,
        amount_positive: 0,
        amount_negative: 0
    };
    var amountneg = 0;
    var amountpos = 0;
    var prodnegative = 1;
    var sumpositive = 0;
    var _min = arrnum [0];
    var _max = arrnum [0];
    for (var i in arrnum) {
      if ( arrnum [i] > _max ) {
          _max = arrnum [i];
      }
      if ( _min > arrnum [i] ) {
          _min = arrnum [i];
      } 
      if (arrnum[i] > 0) {
          sumpositive += arrnum [i];
      }
      if (arrnum[i] < 0) {
          prodnegative *= arrnum[i];
      } 
      if (arrnum[i] > 0) {
          amountpos += 1;
      } else {
          amountneg += 1;
      }
    }
    return result = {
        max_positive: _max,
        min_negative: _min,
        sum_positive: sumpositive,
        product_negative: prodnegative,
        amount_positive: amountpos,
        amount_negative: amountneg
    };
    
}

