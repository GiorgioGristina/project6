// global variables 


const qwerty = document.querySelector("#qwerty");

const phrase = document.querySelector("#phrase");

let missed = 0;



const resetButton = document.querySelector(".btn__reset");

const overlay = document.querySelector("#overlay");

const ul = document.querySelector("ul")



let hearts = document.querySelectorAll("img");
const phrases = ["black current",
                 "book shop", 
                 "the mouline rouge", 
                 "red wine", 
                 "rolling paper"];

// eventlistenr to remove the overlay

resetButton.addEventListener("click", () =>{
    overlay.style.display = "none";

})

// function to get a random phrase from array phrases

function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    randomPhrase = arr[randomNumber].split("")
    return randomPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);

//function addPhraseToDisplay

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        if (li.textContent !== " ") {
            li.className = "letter";
        } else { 
            li.className = "space";
        }
        ul.appendChild(li);
    }
}

addPhraseToDisplay(phraseArray);

//checkletter function

function checkLetter(clickedLetter) {
    let letters = document.querySelectorAll(".letter"); 
    let match = null;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === clickedLetter.textContent ) {
            letters[i].classList.add("show");
            match += clickedLetter.textContent;
        }
       
    }
    return match;
        
    }
    
qwerty.addEventListener("click", (e) => {
    let element = e.target 
    if (element.tagName === "BUTTON") {
        element.className = "chosen";
        element.disable = true;
        let checkTheMatch = checkLetter(element);
        if (checkTheMatch === null) {
            hearts[hearts.length -1 - missed ].src="images/lostHeart.png";
            missed += 1;
        }
    }
})