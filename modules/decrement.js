import { outputEl, valueEl } from "../script.js";

/**
 * Decrements the tally by the value
 */
function decrement() {
  const value = parseInt(valueEl.value);
  let total = parseInt(outputEl.innerHTML);
  total -= value;
  outputEl.textContent = total;
}

export default decrement;
