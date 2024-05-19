/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   str=str.toLowerCase();
   
  str = str.split('');
   let count=0;
   str.forEach(element => {
      if(element=='a'||element=='e'||element=='i'||element=='o'||element=='u'){
        count++;
      }
   });
   return count;
}

module.exports = countVowels;