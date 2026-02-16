const roles = [
  "Blue Team Instructor",
  "Digital Forensics Specialist",
  "Incident Response Expert",
  "Threat Hunter"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {
  current = roles[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!deleting && j < current.length) {
    j++;
  } else if (deleting && j > 0) {
    j--;
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % roles.length;
  }

  setTimeout(type, 80);
}

type();
