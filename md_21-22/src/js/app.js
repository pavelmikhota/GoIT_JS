//Возвращает num в степени exp
	var app = {
		pow: function(num, exp) {
	    	if (Number.isInteger (num) && Number.isInteger (exp)) {
				var result = 1;
			 	var	e = Math.abs(exp); 

				for (var i = 0; i < e; i++) {
					result *= num;
				}

				if (exp >= 0) {
					return result;
				} else {
					return 1/result;
				}
			} else return 'Arguments is not integer numbers!';
		}
	}

	module.exports = app;
