const tips = [
  "Keep learning one step at a time.",
  "Practice coding a little every day.",
  "Read error messages carefully.",
  "Break big problems into smaller ones.",
  "It's okay to look things up while learning.",
  "Comment your code so future-you knows what's going on.",
  "Use meaningful variable names to keep your code readable.",
  "Don’t fear bugs — they’re clues, not failures.",
  "Start with simple solutions before trying advanced ones.",
  "Test your code often so issues stay small.",
  "Learn to use your browser’s developer tools.",
  "Celebrate small wins — they add up fast.",
  "Ask questions when you're stuck; it's part of learning.",
  "Write code that is easy to understand, not just easy to type.",
  "Stay curious — explore how things work under the hood.",
  "Try building tiny projects to reinforce new concepts.",
  "Refactor messy code; clean code makes learning easier.",
  "Use console.log() as your personal detective tool.",
  "Don’t compare your progress to others — your journey is unique.",
  "Remember: every expert was once a beginner."
];

const tipElement = document.getElementById("tip");
const tipButton = document.getElementById("tip-button");

tipButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipElement.textContent = tips[randomIndex];
});
