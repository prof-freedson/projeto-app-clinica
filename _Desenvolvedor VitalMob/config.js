import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

class FirebaseApp {
    constructor(config) {
        this.app = initializeApp(config);
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.app);
    }
}

class LoginForm {
    constructor(formId, firebaseApp) {
        this.form = document.getElementById(formId);
        this.firebaseApp = firebaseApp;

        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    async handleFormSubmit(event) {
        event.preventDefault();

        const email = this.form.email.value;
        const password = this.form.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(this.firebaseApp.auth, email, password);
            const user = userCredential.user;

            const collectionName = "users";
            const documentId = user.uid;

            const userDocRef = doc(this.firebaseApp.db, collectionName, documentId);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, { account: email, password: password });
            }

            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log("Campos do documento:", userData);

                this.showModal(userData);

            } else {
                alert("Dados do usuário não encontrados no Firestore.");
            }

        } catch (error) {
            const errorMessage = error.message;
            alert(`Erro no login: ${errorMessage}`);
        }
    }

    showModal(userData) {
        const modal = document.getElementById("profile-modal");
        const modalUserNameElement = document.getElementById("modal-user-name");
        const modalUserEmailElement = document.getElementById("modal-user-email");
        const senhamodal = document.getElementById("modal-user-conta");
        const emailmodal = document.getElementById("modal-user-senha");
        const modalClose = document.querySelector(".close");

        modalUserNameElement.textContent = userData.account;
        modalUserEmailElement.textContent = userData.password;
        senhamodal.textContent = userData.senha_conta;
        emailmodal.textContent = userData.Conta;
        modal.style.display = "block";

        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const firebaseConfig = {
        apiKey: "AIzaSyBsdUqde33LKrcVdISNg8W7-bVR0z1nKVs",
        authDomain: "login-c2ee9.firebaseapp.com",
        projectId: "login-c2ee9",
        storageBucket: "login-c2ee9.appspot.com",
        messagingSenderId: "243259946059",
        appId: "1:243259946059:web:ea47fa21bf39af301dc9ce",
        measurementId: "G-GYVW6YJNDE"
    };

    const firebaseApp = new FirebaseApp(firebaseConfig);
    const loginForm = new LoginForm("login-form", firebaseApp);
});

