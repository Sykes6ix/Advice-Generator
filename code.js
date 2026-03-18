const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice');
const diceButton = document.getElementById('dice-button');

async function getAdvice() {
  try {
    // Prevent the browser and the API gateway from returning a cached slip
    const response = await fetch(`https://api.adviceslip.com/advice?cache-buster=${Date.now()}`);
    const data = await response.json();
    console.log(data);
    adviceId.textContent = ` #${data.slip.id}`;
    adviceText.textContent = data.slip.advice;

  } catch (error) {
    console.log("Error fetching advice:", error);
  }
}

diceButton.addEventListener('click', getAdvice);