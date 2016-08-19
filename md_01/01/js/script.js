function pow() {
  var num = prompt('Введите число'),
      exp = prompt('Введите степень'),
      minpow,
      result = num;

      
      if (exp == 0) {
        console.log('1');
      } else if ( exp <= 0) {
          for (var j = 1; j < Math.abs(exp); j++) {
           result*=num;
          }
        minpow=1/result;
        console.log(minpow);
        
      } else if (num && exp && !isNaN(num) && !isNaN(exp)) {
        for (var i = 1; i < exp; i++) {
          result*=num;
        }
        console.log(result);
      } else {
        alert('Введите число и степень');
        pow();
      }
    }
    
  pow();