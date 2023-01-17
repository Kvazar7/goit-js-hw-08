import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

const objectToSave = {
    email: "",
    message: "",
};

// const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
// localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
// emailInput.value = JSON.parse(savedMessage).email || "";
// messageInput.value = JSON.parse(savedMessage).message || "";



form.addEventListener("input", throttle(addLocalStorageData, 500));
// form.addEventListener("input", addLocalStorageData);
function addLocalStorageData(e) {
    const {
        elements: { email, message }
    } = e.target;    
    // } = e.currentTarget;
    const savedData = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedData));
};
// 
const dataObject = localStorage.getItem(LOCALSTORAGE_KEY);
function getDataFromLS(object) {
    if (object && emailInput.name === "email") {
        emailInput.value = JSON.parse(object).email;
    }
    if (object && messageInput.name === "message") {
        messageInput.value = JSON.parse(object).message;
    }
}
getDataFromLS(object);
// 
form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    const {
    elements: { email, message }
    } = e.currentTarget;
    // 
    const savedData = {
        email: email.value,
        message: message.value
    };
    // 
    console.log(savedData);
    // console.log(`email: ${email.value}, message: ${message.value}`);
    e.currentTarget.reset(),
    localStorage.clear();
};
