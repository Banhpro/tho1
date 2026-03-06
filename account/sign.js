import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth-compat.js";

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Đăng nhập thành công', userCredential.user);
    alert('Đăng nhập thành công!');
    window.location.href = 'index.html'; // Chuyển hướng tới trang chính (có thể thay đổi)
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    alert('Đăng nhập thất bại. Kiểm tra lại thông tin!');
  }
});