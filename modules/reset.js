import { outputEl, valueEl } from "../script.js";

/**
 * Resets the tally and value
 */
function reset() {
  outputEl.textContent = 0;
  valueEl.value = 1;
}

export default reset;
