function isPalindrome(word) {
	let letters = Array.from(word);
	let palindromeArray = []
	for (let i = letters.length - 1; i > -1; i--){
		palindromeArray.push(letters[i]);
	}
	return palindromeArray.join("") === word
}

/* 
turn input word into an array of letters
start an empty array to store the palindrome
loop through the letters backwards:
	set index to letters array length minus 1 (to account for 0-based index);
	set condition for the loop to check if index is greater than -1 (to account for index of 0);
	decrement the index for each loop;
	push each letter to the palindrome array
join the palindrome array to a string, and return whether it strictly matches the input word
*/

/*
This function turns an input word to an array of letters then loops through the letters backwards to push each letter to a new array (so that the new array is the word spelled backwards), then checks if the new array is spelled exactly the same as the input word. If true, then the word is a Palindrome; if not, it is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
