function prime(num) {
    /*
    This function returns the largest prime number
    
    Arguments: num: number we want to find the largest prime factor for
    
    returns: returns the largest prime factor
    
    Method: If a number is prime, it is only divisible by itself and 1. So this method takes the number (num) and attempts to divide by the smallest factors possible, starting with the integer 2 (i=2) and incrementing i++ until a non-remainder quotient can be found. 
    
    This quotient is passed back to the prime(num) function as a new num, and the test is repeated. 
    
    When no divisors can be used to obtain an integer quotient, that number is returned and is the greatest prime factor.
    
    Hope that made sense...
    */
    
    // forloop excludes dividing by 1 and by num (to test for factors)
 for (i=2; i<num; i++) {
     if (num % i === 0) {
         return prime(num/i); // return new num
     }  
 }
 return num;
 
}

prime(600851475143); // 6857