function hangman(word) {
    let guessedWord = Array(word.length).fill('_');
    let lives = word.length;
    let guessedLetters = [];
    
    while (lives > 0 && guessedWord.includes('_')) {
        let guess = prompt(`Slovo: ${guessedWord.join(' ')}\nZadajte znak:`).toLowerCase();
        
        if (!guess || guess.length !== 1 || guessedLetters.includes(guess)) {
            alert("Neplatný vstup alebo už zadaný znak. Skúste znova.");
            continue;
        }
        
        guessedLetters.push(guess);
        
        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guessedWord[i] = guess;
                }
            }
            alert("Správne!");
        } else {
            lives--;
            alert(`Nesprávne, máte ešte ${lives} životov ❤️`);
        }
    }
    
    if (!guessedWord.includes('_')) {
        alert(`Gratulujem! Uhádli ste slovo: ${word}`);
    } else {
        alert(`Prehrali ste! Hľadané slovo bolo: ${word}`);
    }
}

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function removeDuplicates(numbers) {
    let uniqueNumbers = [];
    for (let num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}

console.log(sumArray([5, 10, 15, 20])); 
console.log(findLongestWord(["apple", "banana", "strawberry", "kiwi"])); 
console.log(filterEvenNumbers([7, 15, 8, 11, 10, 23, 12])); 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

hangman("javascript");
