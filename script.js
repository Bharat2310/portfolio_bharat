document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleThemeBtn-dark");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.contains("body-dark");

    if (isDark) {
      body.classList.remove("body-dark");
      body.classList.add("body-white");
      toggleBtn.id = "toggleThemeBtn"; 
      toggleBtn.textContent = "Switch to Dark Mode";
      document.querySelectorAll(".id-dark").forEach(el => {
        el.classList.remove("id-dark");
        el.classList.add("id");
      });
      document.querySelectorAll(".branch-dark").forEach(el => {
        el.classList.remove("branch-dark");
        el.classList.add("branch");
      });
      document.querySelectorAll(".about-dark").forEach(el => {
        el.classList.remove("about-dark");
        el.classList.add("about");
      });
      document.querySelectorAll(".project-title-dark").forEach(el => {
        el.classList.remove("project-title-dark");
        el.classList.add("project-title");
      });
      document.querySelectorAll(".project-desc-dark").forEach(el => {
        el.classList.remove("project-desc-dark");
        el.classList.add("project-desc");
      });
      document.querySelectorAll(".contact-item-dark").forEach(el => {
        el.classList.remove("contact-item-dark");
        el.classList.add("contact-item");
      });
    } else {
      body.classList.remove("body-white");
      body.classList.add("body-dark");
      toggleBtn.id = "toggleThemeBtn-dark"; 
      toggleBtn.textContent = "Switch to Light Mode";
      document.querySelectorAll(".id").forEach(el => {
        el.classList.remove("id");
        el.classList.add("id-dark");
      });
      document.querySelectorAll(".branch").forEach(el => {
        el.classList.remove("branch");
        el.classList.add("branch-dark");
      });
      document.querySelectorAll(".about").forEach(el => {
        el.classList.remove("about");
        el.classList.add("about-dark");
      });
      document.querySelectorAll(".project-title").forEach(el => {
        el.classList.remove("project-title");
        el.classList.add("project-title-dark");
      });
      document.querySelectorAll(".project-desc").forEach(el => {
        el.classList.remove("project-desc");
        el.classList.add("project-desc-dark");
      });
      document.querySelectorAll(".contact-item").forEach(el => {
        el.classList.remove("contact-item");
        el.classList.add("contact-item-dark");
      });
    }
  });
}
);
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgElement = document.getElementById("formMessage");

  if (!name || !email || !message) {
    msgElement.textContent = "Please fill out all fields.";
    msgElement.style.color = "red";
  } else {
    msgElement.textContent = "Message seent.";
    msgElement.style.color = "green";
    this.reset();
  }
});


