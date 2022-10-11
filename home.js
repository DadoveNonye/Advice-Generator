const adviceGenerator = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    return advice;
  } catch (err) {
    console.error(err);
  }
};
adviceGenerator();

const renderAdvice = async function () {
  const advice = await adviceGenerator();
  const advId = document.querySelector(".id");
  advId.textContent = `ADVICE #${advice.slip.id}`;
  const Advice = document.querySelector(".advice");
  Advice.textContent = `"${advice.slip.advice}"`;
};
renderAdvice();

const adviceBtn = document
  .querySelector(".btn")
  .addEventListener("click", renderAdvice);
