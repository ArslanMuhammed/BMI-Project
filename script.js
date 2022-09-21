const BMIData = [
  { name: "Slender", color: "midnigightblue", range: [0, 18.5] },
  { name: "Good health", color: "green", range: [18.5, 25] },
  { name: "Overweight", color: "lightcoral", range: [25, 30] },
  { name: "Moderate obesity", color: "orange", range: [30, 35] },
  { name: "Severe obesity", color: "crimson", range: [35, 40] },
  { name: "Morbid obesity", color: "purple", range: 40 },
];

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  calculateBMI();
}

// Creating of a variable that selection my inputs in my document index.html
const inputs = document.querySelectorAll("input");
function calculateBMI() {
  // Creating variables for my two inputs
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }

  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  showResult(BMI);
}

const displayBMY = document.querySelector(".BMI-value");
const result = document.querySelector(".BMI-result");
function handleError() {
  displayBMY.textContent = "Ooops...";
  displayBMY.style.color = "inherit";
  result.textContent = "Please. Fill in the boxes correctly";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
  console.log(rank);

  displayBMY.textContent = BMI;
  displayBMY.style.color = `${rank.color}`;
  result.textContent = `Result: ${rank.name}`;
}
