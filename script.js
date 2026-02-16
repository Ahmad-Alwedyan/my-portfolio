const roles = [
  "Blue Team Instructor",
  "Digital Forensics Specialist",
  "Incident Response Expert",
  "Threat Detection Engineer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
  current = roles[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, 90);
}

typeEffect();
