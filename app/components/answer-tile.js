import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    thumbs_up(thumbsup, answer) {
      this.sendAction('thumbs_up', thumbsup, answer);
    },
    thumbs_down(thumbsdown, answer) {
      this.sendAction('thumbs_down', thumbsdown, answer);
    }
  }
});
