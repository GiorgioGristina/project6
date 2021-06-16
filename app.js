
// declaring variables
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
const buttonReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
let missedGuess = 0;
//let ul = phrase.querySelector("ul");
//created array w phrases to guess;
let phrases = ["black current", "book shop", "the mouline rouge", "red wine", "rolling paper"];

//add event listner to start the Game, so this will remove the-
//overlay when the reset button has been clicked
buttonReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

// function for random phrases
function getRandomPhraseAsArray (arr) {
  // random number between 0 and the length of the array
  let random = Math.random();
  let numbOfPhrases = arr.length;
  let randomIndex = Math.floor(random * numbOfPhrases);
  // get the random index number
  return phrases[randomIndex].split("");

};
console.log(getRandomPhraseAsArray(phrases));


let phrasearray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr){

 for (i=0; i<arr.length; i++){
   // create li element
   let li = document.createElement("li");
   // add letter and space to the li element
   li.innerText = arr[i] ;
   // select ul in div with id phase
   let ul = document.querySelector("#phrase ul");
   //append the li to
    ul.appendChild(li);
   // conditional to add class "letter" if if the li element is a letter
   if (arr[i] != " "){
     li.className = "letter";
   } else {
     li.className = "space";
   }
  };
};

addPhraseToDisplay(phrasearray);

//checkletter function

function checkLetter(button) {

  // variable the select li element with class checkLetter
  let liLetter = document.querySelectorAll("li");
  //loop to check letter in the listner
  for (i = 0; i < liLetter.length; i++) {
    // conditional to compare if the button press its match a letter of the phrases
    if (liLetter[i].innerText === button.innerText) {
      liLetter[i].className = "letter show";
      button.disabled= true; // change button status after being pressed
    } else {
      missedGuess = +1;
      let ol = document.querySelector("#scoreboard .tries");
      ol.remove();

    }
  }
}
let qwerty_buttons = document.querySelectorAll("#qwerty button");
qwerty_buttons.forEach((button) => button.addEventListener('click', (e) => {
  checkLetter(button)
}));


 //NEW CODE TRY
function checkLetter(button){
  const liLetter= phrase.querySelectorAll("li");
  let letterFound = false;
  liLetter.forEach(li => {
    if (li.textcontent === button){
      letterFound = true;
    }

  });
  return letterFound;
}
//listener to keyboard
 qwerty.addEventListener('click', e => {
   // if the target is a button
   if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    // change the class="chosen"
    button.className = 'chosen';
    // disabble the button
    button.disabled = true;
    const match = checkLetter(button.textContent);
  }
 });



// check letter function


//function checkLetter(button) {
//  console.log("check letter called", button)
  // variable the select li element with class checkLetter
//  let liLetter = document.querySelectorAll("li");
  //loop to check letter in the listner
//  for (i = 0; i < liLetter.length; i++) {
    // conditional to compare if the button press its match a letter of the phrases
//    if (liLetter[i].innerText === button.innerText) {
//      liLetter[i].className = "letter show";
//      button.disabled= true; // change button status after being pressed
//    } else {
//      missedGuess = +1;
//      let ol = document.querySelector("#scoreboard .tries");
//      ol.remove();

//    }
//  }
//}
//let qwerty_buttons = document.querySelectorAll("#qwerty button");
//qwerty_buttons.forEach((button) => button.addEventListener('click', (e) => {
//  checkLetter(button)
//}));
