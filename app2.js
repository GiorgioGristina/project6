const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const buttonReset = document.querySelector(".btn__reset");
let missedGuess = 0;
const overlayDiv = document.querySelector("#overlay");
const ul = document.querySelector("ul");
const phrases = ["black current","book shop", "the mouline rouge", "red wine", "rolling paper"];
const hearts = document.querySelectorAll("img");

buttonReset.addEventListener("click", ()=>{
    overlayDiv.style.display = "none";
})


function getRandomPhraseAsArray (arr){
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[randomNumber].split("");
    return randomPhrase;

     
    }

const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
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

function checkLetter(letter) {
    const letters = document.querySelectorAll(".letter");
    let match = null;
    for (let i = 0; i < letters.length; i++) {
        if (letter.textContent === letters[i].textContent) {
            letters[i].classList.add("show");
            match += letter.textContent;

        }
        
    }
    return match;
}




qwerty.addEventListener("click", (e)=>{
    const element = e.target;
    if (element.tagName === "BUTTON") {
        element.className="chosen";
        element.disabled= true;
        const letterFound = checkLetter(element);
        if (letterFound === null) {
            hearts[hearts.length -1 -missedGuess].src="images/lostHeart.png"
            missedGuess += 1;

            
        }
        
    }
    checkwin();
})

function checkwin (){
    const numberLetterClass = document.querySelectorAll(".letter")
    const numbershowClass = document.querySelectorAll(".show")

    if (numberLetterClass.length === numbershowClass.length ) {
        overlayDiv.style.display = "flex";
        overlayDiv.className = "win";
        overlayDiv.firstElementChild.innerHTML="congratukation you won!!!";

        
    } else if (missedGuess >= 5){
        overlayDiv.style.display = "flex";
        overlayDiv.className = "lose";
        overlayDiv.firstElementChild.innerHTML="looser";
    }
}
