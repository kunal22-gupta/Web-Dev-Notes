// This program is to print an array of fibonacci series till N


function fibonacci(N){
	var fibo = [];
	if(N === 1){
		fibo[0] = 0;
	}
	else if(N === 2){
		fibo[0] = 0;
		fibo[1] = 1;
	}
	else {
		fibo[0] = 0;
		fibo[1] = 1;
		var len = 0;
		while(N > 2){
			len = fibo.length;
			fibo.push(fibo[len - 2] + fibo[len - 1]);
			N--;
		}
	}
	return fibo;
}

var ans = fibonacci(10);
console.log(ans);