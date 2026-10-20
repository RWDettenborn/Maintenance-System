import { signInWithEmailAndPassword } from
'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js';

import { createUserWithEmailAndPassword } from
'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'

import { sendPasswordResetEmail } from
'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'

import { auth } from './firebase.js';

const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const feedback = document.querySelector('#feedback');
const registerButton = document.querySelector('#registerButton');
const resetPasswordButton = document.querySelector('#resetPasswordButton');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    feedback.textContent = "Validando acesso...";
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "./dashboard.html";
    } catch (error) {
        console.error("Falha no login:", error.code);

        feedback.textContent = "Não foi possível fazer login. Verifique suas credenciais.";
    }
});

registerButton.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        feedback.textContent = "Informe o email e a senha para registrar.";
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        feedback.textContent = "Conta criada com sucesso!";
        window.location.href = "./dashboard.html";
    }catch (error) {
        console.error("Falha no cadastro:", error.code);
        feedback.textContent = "Não foi possível criar a conta. Verifique os dados informados.";
    }
});

resetPasswordButton.addEventListener('click', async () => {
    const email = emailInput.value.trim();

    if (!email) {
        feedback.textContent = "Informe seu email para continuar.";
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        feedback.textContent = "Instruções para redefinir a senha foram enviadas para o seu email.";
    } catch (error) {
        console.error("Falha na recuperação:", error.code);
        feedback.textContent = "Não foi possível solicitar a redefinição de senha. Tente novamente.";
    }
});
