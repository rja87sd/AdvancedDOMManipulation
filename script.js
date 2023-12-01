'use strict';

// Grab elements by ID
const mainContainer = document.getElementById('main-container');
const listContainer = document.getElementById('list-container');
// Grab all buttons using querySelectAll
const buttons = document.querySelectorAll("button");

// When Button 1 is clicked, make a new List Item with text, 'New Item'
buttons[0].addEventListener("click", () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "New Item";
  ul.appendChild(li);
});
