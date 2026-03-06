import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


/* LOGIN */

window.login = async function(){

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;

const userCredential = await signInWithEmailAndPassword(auth,email,password);

const uid=userCredential.user.uid;

const userDoc=await getDoc(doc(db,"users",uid));

if(userDoc.exists()){

const data=userDoc.data();

localStorage.setItem("username",data.username);

}

window.location.href="../index.html";

}