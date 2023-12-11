var arrayStringsAreEqual = function (word1, word2) {
	console.log(word1.join(""));
	console.log(word2.join(""));

	return word1.join("") === word2.join("");
};
console.log(arrayStringsAreEqual(["a", "b"], ["ab"]));
