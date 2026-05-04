const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const equipment = document.getElementById("equipment").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Repair Inquiry - ${equipment}`);
  const body = encodeURIComponent(
`Dear PowerTech Energy Solutions,

I want to request repair/support.

Name: ${name}
Phone: ${phone}
Equipment Type: ${equipment}
Problem Details:
${message}

Thank you.`
  );

  window.location.href = `mailto:tahir.powertech@gmail.com?cc=info.powertech2024@gmail.com&subject=${subject}&body=${body}`;
});
