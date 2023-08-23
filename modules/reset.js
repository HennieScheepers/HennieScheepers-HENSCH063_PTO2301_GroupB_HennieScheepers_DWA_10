import { valueEl } from "../script.js";

export const dialog = document.querySelector(".dialog-header-actions");

/**
 * Resets the tally and value
 */
export function reset() {
  valueEl.value = 1;
  dialog.show();
}
