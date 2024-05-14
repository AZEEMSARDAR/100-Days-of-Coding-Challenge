// This function finds "Apple" in the fruits array and replaces it with "Banana"
function replaceAppleWithBanana(fruits: string[]): void {
    const index = fruits.indexOf("Apple"); // Finds the index of 'Apple'
    if (index !== -1) fruits[index] = "Banana"; // Replaces "Apple" with "Banana" if found

}
// Example: Replacing "Banana" in the array
const fruits: string[] = ["Kiwi", "Apple", "Mango"];
replaceAppleWithBanana(fruits);
console.log(fruits); // Outputs: [ 'Kiwi', 'Banana', 'Mango']
// We're swapping "Apple" for "Banana" in our fruit list.