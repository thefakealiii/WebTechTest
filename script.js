const introEl = document.getElementById('intro');

function updateContent(newText) {
  introEl.textContent = newText;
  // Clear choices to prevent duplicates
  const choicesEl = document.querySelector('.choices');
  choicesEl.innerHTML = "";
}

const choice1Button = document.getElementById('choice1');
choice1Button.addEventListener('click', () => {
  updateContent(`With determination in your circuits, you set out to hunt down the virus, tracing its digital footprint through the labyrinth of code. As you close in on the virus's location, you find yourself face-to-face with your digital nemesis. The virus sneers, ready to unleash chaos upon the system. How will you respond?

  <button class="choice-button" id="choiceA1">Engage the virus in a direct battle to neutralize its threat.</button>
  <button class="choice-button" id="choiceA2">Attempt to reason with the virus and convince it to cease its destructive behavior.</button>`);

  const choiceA1Button = document.getElementById('choiceA1');
  choiceA1Button.addEventListener('click', () => {
    updateContent(`You engage the virus in a fierce digital battle, unleashing your arsenal of antivirus protocols and defensive algorithms. The virus retaliates with cunning tactics and relentless attacks, threatening to overwhelm your defenses. Will you continue the fight or seek an alternative approach?

      <button class="choice-button" id="choiceAA1">Press on with the battle, determined to defeat the virus at any cost.</button>
      <button class="choice-button" id="choiceAA2">Retreat and regroup, seeking a more strategic advantage against the virus.</button>`);

    const choiceAA1Button = document.getElementById('choiceAA1');
    choiceAA1Button.addEventListener('click', () => {
      updateContent(`With unwavering resolve, you push forward, exploiting vulnerabilities in the virus's code and launching targeted counterattacks. The battle rages on, pushing both sides to their limits. In a final surge of power, you unleash a devastating countermeasure, erasing the virus from the system. The digital world is safe... for now. Congratulations!`);
    });

    const choiceAA2Button = document.getElementById('choiceAA2');
    choiceAA2Button.addEventListener('click', () => {
      updateContent(`Recognizing the need for a tactical shift, you disengage from the virus, analyzing its attack patterns. You identify a critical weakness and formulate a new strategy. However, before you can enact your plan, the virus launches a surprise attack, breaching your defenses. The virus has won... for now.`);
    });
  });

  const choiceA2Button = document.getElementById('choiceA2');
  choiceA2Button.addEventListener('click', () => {
    updateContent(`In a bold attempt at diplomacy, you attempt to reason with the virus, explaining the harm it's causing to the system. The virus scoffs at your pleas, reveling in the chaos it creates. Realizing negotiation is futile, you are forced to engage in a direct confrontation.

      <button class="choice-button" id="choiceAB1">Engage the virus in a direct battle (Same outcome as Choice A1 - Battle)</button>`);

    const choiceAB1Button = document.getElementById('choiceAB1');
    choiceAB1Button.addEventListener('click', () => {
      updateContent(`You engage the virus in a fierce digital battle... (refer to existing content for choice A1 - Battle outcome)`);
    });
  });
});

const choice2Button = document.getElementById('choice2');
choice2Button.addEventListener('click', () => {
  updateContent(`You bolster your defenses, fortifying the system's firewall and deploying additional security measures to ward off the impending threat. As you prepare for battle, you receive a warning signal—a breach in the system's perimeter. The virus has infiltrated the system, launching a full-scale assault on your defenses. How will you respond?

  <button class="choice-button" id="choiceB1">Rally your antivirus allies and coordinate a coordinated counterattack against the virus.</button>
  <button class="choice-button" id="choiceB2">Engage the virus in a tactical defense, using your enhanced defenses to repel its advances.</button>`);

const choice2B1Button = document.getElementById('choiceB2B1');
choice2B1Button.addEventListener('click', () => {
  updateContent(`With the strength of numbers and a united strategy, you and your allies launch a synchronized counterattack against the virus. The battle rages across multiple fronts, with each antivirus program contributing their unique skills and expertise. After a fierce struggle, you manage to isolate and quarantine the virus, rendering it harmless. The system is victorious!`);
});

const choice2B2Button = document.getElementById('choiceB2B2');
choice2B2Button.addEventListener('click', () => {
  updateContent(`With strategic precision, you counter each of the virus's attacks, utilizing your enhanced defenses to protect the system's core functions. The virus's efforts are thwarted, and it retreats in frustration. The system is safe... for now.`);
});
}); // Closing brace for choice2Button event listener
});
