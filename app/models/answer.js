import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  thumbsup: DS.attr(),
  thumbsdown: DS.attr(),
  difference: DS.attr()
});
