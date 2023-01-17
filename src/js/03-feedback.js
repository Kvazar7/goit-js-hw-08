import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

const objectToSave = {
    email: "",
    message: "",
};

savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
emailInput.value = JSON.parse(savedMessage).email || "";
messageInput.value = JSON.parse(savedMessage).message || "";

form.addEventListener("input", addLocalStorageData);
// form.addEventListener("input", throttle(addLocalStorageData, 500));
function addLocalStorageData(e) {
    const {
        elements: { email, message }
    } = e.currentTarget;
    const savedData = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedData));
};

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    const {
    elements: { email, message }
    } = e.currentTarget;
    console.log(`email: ${email.value}, message: ${message.value}`);
    e.currentTarget.reset(),
    localStorage.clear();
};



