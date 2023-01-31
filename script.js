const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]
var word, maxGuess, incorrectwords = [], correctwords = [];
const resetBtn = document.querySelector(".reset-btn");
const userinput = document.querySelector(".userinput");
const inputcover = document.querySelector(".inputcover");
const hint = document.querySelector(".hint span");
const guessrem = document.querySelector(".rem-guess span");
const wrongword = document.querySelector(".wrong-letter span");
function startgame(e) {
    let inputalpha = e.target.value.toLowerCase();
    if(inputalpha.match(/^[A-Za-z]+$/) && !incorrectwords.includes(` ${inputalpha}`) && !correctwords.includes(inputalpha)) {
        if(word.includes(inputalpha)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == inputalpha) {
                    correctwords += inputalpha;
                    inputcover.querySelectorAll("input")[i].value = inputalpha;
                }
            }
        } else {
            --maxGuess;
            incorrectwords.push(` ${inputalpha}`);
        }
        guessrem.innerText = maxGuess;
        wrongword.innerText = incorrectwords;
    }
    userinput.value = "";
    setTimeout(() => {
        let count=0;
        if(correctwords.length === word.length) {
            alert(`Congrats! You Won🥳🥳!!`);
            return wordgenerator();
        } else if(maxGuess < 1) {
            if(count==0)
            {
                alert("Game over😔😔!");
                count++;
            }
            
            for(let i = 0; i < word.length; i++) {
                inputcover.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
function wordgenerator() {
    let wordlist = wordList[Math.floor(Math.random() * wordList.length)];
    word = wordlist.word;
    maxGuess = word.length >= 5 ? 8 : 6;
    correctwords = []; incorrectwords = [];
    hint.innerText = wordlist.hint;
    guessrem.innerText = maxGuess;
    wrongword.innerText = incorrectwords;
    let element = "";
    for (let i = 0; i < word.length; i++) {
        element += `<input type="text" disabled>`;
        inputcover.innerHTML = element;
    }
}
wordgenerator();

resetBtn.addEventListener("click", wordgenerator);
userinput.addEventListener("input", startgame);
inputcover.addEventListener("click", () => userinput.focus());
document.addEventListener("keydown", () => userinput.focus());