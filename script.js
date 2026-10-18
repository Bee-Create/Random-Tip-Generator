const tips = [
  "Keep learning one step at a time.",
  "Practice coding a little every day.",
  "Read error messages carefully.",
  "Break big problems into smaller ones.",
  "It's okay to look things up while learning."
];

const tipElement = document.getElementById("tip");
const tipButton = document.getElementById("tip-button");

tipButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipElement.textContent = tips[randomIndex];
});
