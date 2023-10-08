/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car", "the book"];
let when = ["before lunch", "when I finished", " last Sunday"];

function excuseGenerator() {
  let whorandom = who[Math.floor(Math.random() * who.length)];
  let actionrandom = action[Math.floor(Math.random() * action.length)];
  let whatrandom = what[Math.floor(Math.random() * what.length)];
  let whenrandom = when[Math.floor(Math.random() * when.length)];

  return whorandom + " " + actionrandom + " " + whatrandom + " " + whenrandom;
}
