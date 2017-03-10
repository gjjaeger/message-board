import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['difference:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    thumbs_up(thumbsup, answer) {
      this.sendAction('thumbs_up', thumbsup, answer);
    },
    thumbs_down(thumbsdown, answer) {
      this.sendAction('thumbs_down', thumbsdown, answer);
    }
  }
});
