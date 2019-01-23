const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Goals = function (url) {
  this.url = 'http://localhost:3000/api/goals';
  this.request = new RequestHelper(this.url);
};

Goals.prototype.bindEvents = function () {

  // PubSub.subscribe('SightingView:sighting-delete-clicked', (evt) => {
  //   this.deleteSighting(evt.detail);
  };

Goals.prototype.getData = function () {
  this.request.get()
    .then((goals) => {
      PubSub.publish('Goals:data-loaded', goals);
    })
    .catch(console.error);
};




module.exports = Goals;
