import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
getAuth,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
getFirestore,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


/* ================= FIREBASE CONFIG ================= */

const firebaseConfig = {

apiKey:"AIzaSyD5VotnEcZ6hQduMoF5AjL0024x1VTkEu4",
authDomain:"banhkietgithunbpoem.firebaseapp.com",
projectId:"banhkietgithunbpoem",
storageBucket:"banhkietgithunbpoem.firebasestorage.app",
messagingSenderId:"429631951698",
appId:"1:429631951698:web:8c5f6854de3ad22113a08b"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


/* ================= AUTH STATE ================= */

onAuthStateChanged(auth, async (user)=>{

const userSpan = document.getElementById("username");
const helloBox = document.querySelector(".hello");

if(!user){

if(helloBox){
helloBox.style.display="none";
}

return;

}


/* ================= GET USER DATA ================= */

try{

const ref = doc(db,"users",user.uid);

const snap = await getDoc(ref);

if(snap.exists()){

const data = snap.data();

if(userSpan){
userSpan.innerText = data.username;
}

if(helloBox){
helloBox.style.display="block";
}

/* lưu cache */

localStorage.setItem("username",data.username);
localStorage.setItem("role",data.role);

}

}catch(err){

console.log("Firestore error:",err);

}

});