import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

const objectToSave = {
    email: "",
    message: "",
};

form.addEventListener("input", throttle(addLocalStorageData, 500));
function addLocalStorageData(e) {
    const {
        elements: { email, message }
    } = e.target;
    const savedData = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedData));
};

const dataObject = localStorage.getItem(LOCALSTORAGE_KEY);
function getDataFromLS(object) {
    if (object && emailInput.name === "email") {
        emailInput.value = JSON.parse(object).email;
    }
    if (object && messageInput.name === "message") {
        messageInput.value = JSON.parse(object).message;
    }
}
getDataFromLS(dataObject);

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    const {
    elements: { email, message }
    } = e.currentTarget;
    const savedData = {
        email: email.value,
        message: message.value
    };
    console.log(savedData);
    e.currentTarget.reset(),
    localStorage.clear();
};



