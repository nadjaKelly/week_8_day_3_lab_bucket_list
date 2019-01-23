
const Goals = require('./models/goals.js');


document.addEventListener('DOMContentLoaded', () => {
console.log("js loaded");






const goals = new Goals();
  goals.bindEvents();
  goals.getData();



});
