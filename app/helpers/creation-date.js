import Ember from 'ember';

export function creationDate(params) {
  var answer = params[0];

  var theDate = moment().diff(answer.date, 'days')>1;
  return theDate;


}

export default Ember.Helper.helper(creationDate);
