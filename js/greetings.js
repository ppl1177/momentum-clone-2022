const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const setClock = document.querySelector("#clock");
const setQuotes = document.getElementById("quote");
const setWeather = document.querySelector("#weather");
const todoAsk = document.querySelector("#ask-main span");

const helloH1 = document.querySelector("#ask-main h1:first-child");

//스트링만 포함된 변수는 대문자 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault() <<이벤트의 기본행동이 실행되지않게 막는것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello "+username;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    //username은 (username)에서 가져옴
    console.dir(todoAsk);
    greeting.innerText = `Hello ${username}! Let's go on a trip right now `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    setClock.classList.remove(HIDDEN_CLASSNAME);
    setQuotes.classList.remove(HIDDEN_CLASSNAME);
    setWeather.classList.remove(HIDDEN_CLASSNAME);
    todoAsk.classList.remove(HIDDEN_CLASSNAME);
    helloH1.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}