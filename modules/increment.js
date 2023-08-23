import { outputEl, valueEl } from "../script.js";

/**
 * Inccrement the tally by the value
 */
function increment() {
  const value = parseInt(valueEl.value);
  let total = parseInt(outputEl.innerHTML);
  console.log(value);
  console.log(total);
  total += value;
  outputEl.textContent = total;
}

export default increment;
