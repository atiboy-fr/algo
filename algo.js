let sentence = prompt("Enter a sentence that ends with a fullstop");

let lenSen = sentence.length;

console.log(`The Length of the Sentence is: ${lenSen}`);

let numWords = 0

for(let char of sentence) {
    if(char == " ") {
        numWords++
    }
}

numWords = numWords + 1;

console.log(`The Number of Words in the sentence is: ${numWords}`);

let numvowels = 0

for(let char of sentence) {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        numvowels++
    }
}

alert(`The Length of the Sentence is: ${lenSen}\nThe Number of Words in the sentence is: ${numWords}\nThe Number of Vowels in the Sentence is: ${numvowels}`)

console.log(`The Number of Vowels in the Sentence is: ${numvowels}`);