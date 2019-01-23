const GoalsFormView = require('./views/goals_form_view.js')
const Goals = require('./models/goals.js');


document.addEventListener('DOMContentLoaded', () => {
console.log("js loaded");






const goals = new Goals();
  goals.bindEvents();
  goals.getData();



});
