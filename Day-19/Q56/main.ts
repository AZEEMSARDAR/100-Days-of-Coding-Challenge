
// A mixed bag of items.
let mixedBag = [5, "grapes", 4, "banana", 3, "apple", 2, true, "mango", 1];

// Picks out only the words.
let StringsArray = mixedBag.filter(item => typeof item === "string");

// Shows the list of just words
console.log(StringsArray);


