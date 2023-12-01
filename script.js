"use strict";

// Grab elements by ID
const mainContainer = document.getElementById("main-container");
const listContainer = document.getElementById("list-container");
// Grab all buttons using querySelectAll
const buttons = document.querySelectorAll("button");

// When Button 1 is clicked, make a new List Item with text, 'New Item'
buttons[0].addEventListener("click", () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "New Item";

  // Add a 'click' Event Listener to toggle the 'highlight' class when a List Item is clicked.
  li.addEventListener("click", () => {
    li.className = "changeColor";
    li.classList.add("highlight");

  });

  ul.appendChild(li);
});

// When Button 2 is clicked, change the text of all List Items to 'Updated Item'
buttons[1].addEventListener("click", () => {
  const liArray = document.querySelectorAll("li");
  for (let i = 0; i < liArray.length; i++) {
    liArray[i].innerText = "Updated Item";
  }
});

// When Button 3 is clicked, remove the last List Item from the List Container.
buttons[2].addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");
  const indexToBeRemoved = listItems.length - 1;
  listItems[indexToBeRemoved].remove();
});

// Add padding and a border to main-container. (These I had help with from W3 Schools. https://www.w3schools.com/jsref/prop_style_border.asp )
document.getElementById("main-container").style.border = "thin solid black";
document.getElementById("main-container").style.padding = "20px";
