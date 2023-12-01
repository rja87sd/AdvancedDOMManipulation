'use strict';

// Grab elements by ID
const mainContainer = document.getElementById('main-container');
const listContainer = document.getElementById('list-container');
// Grab all buttons using querySelectAll
const buttons = document.querySelectorAll("button");

// When Button 1 is clicked, make a new List Item with text, 'New Item'
buttons[0].addEventListener('click', () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "New Item";
  ul.appendChild(li);
});

// When Button 2 is clicked, change the text of all List Items to 'Updated Item'
buttons[1].addEventListener('click', () => {
    const ulUpdate = document.querySelector('ul');
    const liArray = document.querySelectorAll('li');
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].innerText = 'Updated Item';
    }
});

