import increment from "./modules/increment.js";
import decrement from "./modules/decrement.js";
import reset from "./modules/reset.js";

/**
 * @type {HTMLElement}
 */
export const valueEl = document.querySelector("[data-value]");
/**
 * @type {HTMLElement}
 */
export const outputEl = document.querySelector("[data-output]");

/**
 * @type {HTMLElement}
 */
const incButton = document.querySelector("[data-inc-button]");
/**
 * @type {HTMLElement}
 */
const decButton = document.querySelector("[data-dec-button]");
/**
 * @type {HTMLElement}
 */
const resetButton = document.querySelector("[data-reset]");

incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);
