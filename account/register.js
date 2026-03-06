import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth-compat.js";

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Đăng ký thành công', userCredential.user);
    alert('Đăng ký thành công!');
    window.location.href = 'sign.html'; // Chuyển hướng sang trang đăng nhập
  } catch (error) {
    console.error('Lỗi đăng ký:', error);
    alert('Đăng ký thất bại. Kiểm tra lại thông tin!');
  }
});