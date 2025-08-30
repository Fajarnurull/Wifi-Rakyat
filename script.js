document.getElementById("year").textContent = new Date().getFullYear();


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});


const loginModal = document.getElementById("loginModal");
const btnLogin = document.getElementById("btnLogin");
const closeLogin = document.getElementById("closeLogin");

btnLogin.onclick = () => loginModal.style.display = "block";
closeLogin.onclick = () => loginModal.style.display = "none";


const registerModal = document.getElementById("registerModal");
const btnRegister = document.getElementById("btnRegister");
const closeRegister = document.getElementById("closeRegister");

btnRegister.onclick = () => registerModal.style.display = "block";
closeRegister.onclick = () => registerModal.style.display = "none";

function openRegister() {
  registerModal.style.display = "block";
}


window.onclick = function(e) {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
};


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Pesan berhasil dikirim!";
  this.reset();
});


document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("registerMsg").textContent = "Pendaftaran berhasil dikirim! Admin akan menghubungi Anda.";
  this.reset();
});
