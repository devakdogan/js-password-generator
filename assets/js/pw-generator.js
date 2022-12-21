const screenEl = document.querySelector("#screen");
const screenTextEl = document.querySelector("#screen-text");
const pwLengthEl = document.querySelector("#pw-length");
const upperCaseEl = document.querySelector("#uppercase");
const lowerCaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const generateEl = document.querySelector("#generate");
let keys = [];
let password ="";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=";

generateEl.addEventListener("click", ()=>{
    screenTextEl.value = "";
    screenEl.classList.replace("screen","screen-visible");
    setOption();
    if(keys.length!=0){
       generatePassword(); 
       screenTextEl.innerHTML = password;
    }else screenTextEl.innerHTML = "Password can not be created!";
    password = "";
    keys.splice(0,keys.length);  
})



const setOption = ()=>{
    if(pwLengthEl.value<=0){
        alert("Please input a valid number!");
    }else if (!upperCaseEl.checked && !lowerCaseEl.checked && !numberEl.checked && !symbolEl.checked){
        alert("Please check at least one box!")
    }else{
      if(upperCaseEl.checked){
        keys = keys.concat(upperCase.split(""));
    }
    if(lowerCaseEl.checked){
        keys = keys.concat(lowerCase.split(""));
    }
    if(numberEl.checked){
        keys = keys.concat(number.split(""));
    }
    if(symbolEl.checked){
        keys = keys.concat(symbol.split(""));
    }
    keys.sort(()=> Math.random() - 0.5);  
    }   
}

const generatePassword = ()=>{
    for(let i = 0; i < pwLengthEl.value;  i++) {
      password += keys[Math.floor(Math.random() * keys.length)];
    }
}
