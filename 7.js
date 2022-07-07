// Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    let fun = 1;
    if (n == 0 || n == 1){
      return fun;
    }else{
      for(var i = n; i >= 1; i--){
        fun = fun * i;
      }
      return fun;
    }  
  }
console.log(factorial(6));