const introEl = document.getElementById('intro');
const choicesEl = document.querySelector('.choices');

function updateContent(newText) {
  introEl.textContent = newText;
  choicesEl.innerHTML = ""; // Clear previous choices
}

const choice1Button = document.getElementById('choice1');
choice1Button.addEventListener('click', () => {
  updateContent(`With determination in your circuits, you set out to hunt down the virus, tracing its digital footprint through the labyrinth of code. As you close in on the virus's location, you find yourself face-to-face with your digital nemesis. The virus sneers, ready to unleash chaos upon the system. How will you respond?

  <button class="choice-button" id="choiceA1">Engage the virus in a direct battle to neutralize its threat.</button>
  <button class="choice-button" id="choiceA2">Attempt to reason with the virus and convince it to cease its destructive behavior.</button>`);

  const choiceA1Button = document.getElementById
