const PubSub = require('../helpers/pub_sub.js')

const GoalsFormView = function (form) {
  this.form = form;
};

GoalsFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

// SightingFormView.prototype.handleSubmit = function (evt) {
//   evt.preventDefault();
//   const newSighting = this.createSighting(evt.target);
//   PubSub.publish('SightingFormView:sighting-submitted', newSighting);
//   evt.target.reset();
// };

GoalsFormView.prototype.createGoal = function (form) {
  const newGoal = {
    name: form.name.value,
    location: form.location.value,
    byAge: form.byAge.value
  };

  return newGoal;
};

module.exports = GoalsFormView;
