import "./style.css"
import express, { response } from "express"
import {z} from "zod"

const server = express();
server.use(express.json());

const emailInput = document.getElementById('email') as HTMLInputElement
const passwordInput = document.getElementById('password') as HTMLInputElement
const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement
const registrationButton = document.getElementById('registration') as HTMLButtonElement
const returnButton = document.getElementById('return') as HTMLButtonElement
const registrationForm = document.getElementById('registrationForm') as HTMLDivElement
const hideButton = document.getElementById('hideError') as HTMLButtonElement
const successMsg = document.getElementById('success') as HTMLDivElement
const errorMsg = document.getElementById('error') as HTMLDivElement
const hideValidationErrorButton = document.getElementById('validationError') as HTMLButtonElement
const hideExistingUserErrorButton = document.getElementById('existingUserError') as HTMLButtonElement
const hideUnexpectedErrorButton = document.getElementById('unexpectedError') as HTMLButtonElement
const hideConnectionErrorButton = document.getElementById('connectionError') as HTMLButtonElement

const email = emailInput.value;
const password = passwordInput.value;
const confirmPassword = confirmPasswordInput.value;

const users = {
    id: z.coerce.number,
    email: z.string,
    password: z.string
}
registrationForm.addEventListener('submit', async () => {
    try {
        const response = safeFetch ('/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({users}),
        })
    } catch(error) {
        response.sendStatus(500)
    }
});


const emailCheck = () => {
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

const isValidEmail = emailCheck.test(email);

emailInput.classList.remove('valid', 'invalid');
emailInput.classList.add(isValidEmail ? 'valid' : 'invalid');

const isPasswordValid = password.length >= 5;
const isConfirmedPasswordValid = confirmPassword === password

passwordInput.classList.remove('valid', 'invalid');
confirmPasswordInput.classList.remove('valid', 'invalid');
passwordInput.classList.add(isPasswordValid ? 'valid' : 'invalid');
confirmPasswordInput.classList.add(isConfirmedPasswordValid ? 'valid' : 'invalid');

returnButton.addEventListener('click', () => {
    registrationForm.style.display = 'block'
    successMsg.style.display = 'none'
});

hideButton.addEventListener('click', () => {
    errorMsg.style.display = 'none'
    registrationForm.style.display = 'block'
});

const hideErrorMessage = () => {
    errorMsg.style.display = 'none'
    hideButton.style.display = 'none'
    hideValidationErrorButton.style.display = 'none'
    hideExistingUserErrorButton.style.display = 'none'
    hideUnexpectedErrorButton.style.display = 'none'
    hideConnectionErrorButton.style.display = 'none'
};

hideButton.addEventListener('click', hideErrorMessage)
hideValidationErrorButton.addEventListener('click', hideErrorMessage)
hideExistingUserErrorButton.addEventListener('click', hideErrorMessage)
hideUnexpectedErrorButton.addEventListener('click', hideErrorMessage)
hideConnectionErrorButton.addEventListener('click', hideErrorMessage)

const errorType = errorMsg
if (errorType === )




function safeFetch(arg0: string, arg1: { method: string; headers: { 'Content-Type': string }; body: string }) {
    throw new Error("Function not implemented.")
}
