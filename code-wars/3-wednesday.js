

// Find the mean (average) of a list of numbers in an array.








var findAverage = function (nums) {
    let sum= 0;
    for (i=0; i<nums.length; i++) {
      sum += nums[i];
    }
    return sum/nums.length;
  
  }