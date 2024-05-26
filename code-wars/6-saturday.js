// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    // Split the string into an array of words
    const arr = s.split(" ");
    
    // Initialize a variable to keep track of the shortest word length
    let shortest = arr[0].length;
    
    // Iterate through the array of words using forEach
    arr.forEach(word => {
        if (word.length < shortest) {
            shortest = word.length;
        }
    });
    
    // Return the length of the shortest word
    return shortest;
}

console.log(findShort('Hello my name is dog'))


//This one was hard at firwst becasue it was multipe steps but aft3er I broke down each part and then found a way to put it togethe r