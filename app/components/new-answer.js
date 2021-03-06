import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
    var now = new Date();
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       question: this.get('question'),
       thumbsup: 0,
       thumbsdown: 0,
       difference:parseInt(0),
       date: now
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
