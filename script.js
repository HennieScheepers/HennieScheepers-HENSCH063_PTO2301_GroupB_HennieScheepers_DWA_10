import increment from "./modules/increment.js";
import decrement from "./modules/decrement.js";
import reset from "./modules/reset.js";

/**
 * @type {valueEl} HTMLElement
 * @type {outputEl} HTMLElement
 */
export const valueEl = document.querySelector("[data-value]");
export const outputEl = document.querySelector("[data-output]");

const incButton = document.querySelector("[data-inc-button]");
const decButton = document.querySelector("[data-dec-button]");
const resetButton = document.querySelector("[data-reset]");

incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);
