const startButton = document.querySelector(".btn__reset");

let missed = 0;

const phrases=["black current", "book shop", "the mouline rouge", "red wine", "rolling paper"]

const overlay= document.querySelector("#overlay");

const qwerty = document.querySelector("#qwerty");

startButton.addEventListener("click", ()=>{
    overlay.style.display= "None" ;
    
})

function getRandomPhraseAsArray (arr){
    const randomNumber = Math.floor(Math.random() * phrases.length );
    //trasform string into array use method .split()
    const randomPhrase = arr[randomNumber].split("");
    return randomPhrase;

}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    const ul = document.querySelector("ul");
    for (let i= 0; i < arr.length; i++) {
        const list = document.createElement("li");
        list.textContent = arr[i];
        if (arr[i] === " ") {
            list.classList.add("space");
        } else {
            list.classList.add("letter"); 
        }
        ul.appendChild(list);
        
        
        
    }
}

addPhraseToDisplay("phraseArray");

function checkLetter(button) {
    const letter = document.querySelectorAll(".letter");
    const match = button.textContent;
    for (let i = 0; i < letter.length; i++) {
        if (button.textcontent === letter[i].textContent) {
            letter[i].classList.add("show");
            match += button.textContent;
            
        }
        
    }
    return match
}

qwerty.addEventListener("click", (e) =>{
    if (e.target.tagName === "BUTTON") {
        e.target.classList.add("chosen");
        e.target.disabled="true";
        const letterFound = checkLetter(e.target);

        
    }

})


