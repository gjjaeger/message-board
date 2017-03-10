import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      this.get('favoriteList').add(item);
    }
  }
});
