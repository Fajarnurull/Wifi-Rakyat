// Hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Year auto update
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Pesan berhasil dikirim!";
  formMsg.style.color = "green";
  contactForm.reset();
});

// Modal Login
const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

btnLogin.onclick = () => modal.style.display = "flex";
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login berhasil (simulasi).");
  modal.style.display = "none";
});
