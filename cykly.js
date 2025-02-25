/*/
function kaficko(string, character){
    for (var i = 0; i < string.length; i++){
        if (string[i] === character){
            return "Znak " + character + " sa nachadza na pozici " + i;
        }
    }
    return "Znak sa nenasiel";

    }
        console.log(kaficko("Pes", "e"));

    function vypisSlovoOdzadu(slovo){
        var slovoOdzadu = "";
        for (var i = slovo.length -1; i >= 0; i--) {
            slovoOdzadu += slovo[i];

        }

        return slovoOdzadu;
    }

    console.log((vypisSlovoOdzadu("Pess")));



    function pocetVyskytov(string, character) {
        var pocet = 0;
        for (var i = 0; i < string.length; i++) { 
            if (string[i] === character) {
                pocet++;
            }
        }
        if (pocet > 0) {
            return "Character '" + character + "' sa v texte nachádza " + pocet + "-krát.";
        } else {
            return "Character '" + character + "' sa v texte nenachádza.";
        }
    }
    
    console.log(pocetVyskytov("Kajo", "k"));

    function VypocitajFak(cislo) {
        var vypocet = 1;
        for(var i = 1; i <= cislo; i++) {
            vypocet = vypocet * i;
        }

return vypocet;
    }
    console.log(VypocitajFak(5));
    

    function fibonacijev(cislo) {
       let a = 0; b = 1;
       console.log(`Fibonacciho postupnost do ${cislo}`)
       console.log(a);
       console.log(b);

     for(var i = 0; b < cislo; i++){
        var newA = b;
        b = a + b;
        console.log(b);
        a = newA;

     }
    }
    console.log(fibonacijev(120));
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function countdown(odpocitajOd) { 
        while (odpocitajOd > 0) {
            console.log(odpocitajOd--);
            await delay(1000); 
        }
        
    }
    
    console.log(countdown(10));

    function guessNumber(cislo) {
        let userInput = 0;
        while (userInput !== cislo) {
            userInput = parseInt(prompt("Hladaj cislo"));
            
            if (isNaN(userInput)) {
                alert("Prosím, zadajte platné číslo.");
            } else if (userInput > cislo) {
                alert("Zadané číslo je príliš veľké.");
            } else if (userInput < cislo) {
                alert("Zadané číslo je príliš malé.");
            } else {
                alert("Správne! Uhádol si číslo.");
            }
        }
    }
    
    guessNumber(10);

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
    

  function zoradPole(pole) {
    return pole.sort((a, b) => a - b);
}

let vstup = [5, -10, 15, -20];
let vystup = zoradPole(vstup);
console.log(vystup.join(", "));



    function naplnPole(n) {
        let pole = [];
        
        for (let i = 0; i < n; i++) {
          let nahodneCislo = Math.floor(Math.random() * 21);
          pole.push(nahodneCislo);
        }
      
        return pole;
      }
      
      let vysledok = naplnPole(4);
      console.log(vysledok);
      
      

      function filtrovatPole(pole) {
        return pole.filter(item => Number.isInteger(item));
    }
    
    let vstup = [58, 'ABCDE', true, null, false, 0];
    let vystup = filtrovatPole(vstup);
    console.log(vystup); 

    

    const array20 = [
    [K, O, C, A, N, I, N, A, S, A, N]
    [A, C, K, L, E, B, A, N, I, K, I]
    [S, A, E, V, T, N, M, A, C, R, P]
    [M, A, S, R, I, S, A, T, I, E, O]
    [O, E, N, L, O, T, C, Z, N, C, C]
    [P, R, A, B, A, B, K, A, D, U, I]
    [R, M, E, A, R, Y, A, Y, E, L, M]
    [V, U, E, I, O, T, E, L, L, R, N]
    [CH, Y, Z, A, S, C, E, S, O, K, I]
    [E, O, T, E, V, S, L, S, K, E, C]
    [K, E, C, V, O, K, S, A, L, A, V]
];

    const word = "KOCANINA"

    function searchWord(grid, word)
    {
      const directions = [
        [0, 1],   // RIGHT
        [0, -1],  // LEFT
        [1, 0],   // DOWN
        [-1, 0],  // UP
        [1, 1],   // DOWN-RIGHT
        [-1, -1], // DOWN-LEFT
        [1, -1],  // UP-RIGHT
        [-1, 1]   // UP-LEFT
      ];

   
    const rows = grid.length;
    const cols = grid[0].length;

    
    function isValid(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
    
    function search (x, y, dx, dy) {
        for (let i = 0; 1 < word.length ; i++) {
            if (!isValid(x, y) || grid[x][y]  !== word[i]) {
                return false;
            }
            x += dx;
            y += dy;
        }
        return true;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === word[0]) {
                for (let [dx, dy] of directions) {
                    if(search(i, j, dx, dy)) {
                       console.log("Nasiel som tu a tu take a take slovo a v tomto a tomto smere");
                       return;
                    }
                   
            }
        }

    }
}

 return null; 

}
/*/


    
    
    
      
    



    

    
    
    


