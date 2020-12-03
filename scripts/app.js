const userInput = document.querySelector(".user-input");
const translatedText = document.querySelector(".card-text");
const button = document.querySelector(".btn-output"); 
const API = "https://api.funtranslations.com/translate/ferb-latin.json?text=";
// console.log(userInput, translatedText, button);

function constructURL(){
    return API + userInput.value;
}

function errorHandle(error){
    console.log("OOPS! What happend? => ", error);
}

function outputDOM(json){
    // console.log(json);
    translatedText.value = json.contents.translated;
}

function callingAPI(){
    fetch(constructURL())
    .then(response => response.json())
    .then(json => outputDOM(json))
    .catch(error => errorHandle(error));
}

button.addEventListener("click", callingAPI);