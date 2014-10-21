NewsReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  tagName: 'ul',
  template: JST['feeds/index'],
  events: {
    'mouseover .feed-link': 'addHover',
    'mouseleave .feed-link': 'removeHover'
  },
  render: function() {
    var renderedTemplate = this.template({
      feeds: this.collection
    });

    this.$el.html(renderedTemplate);
    return this;
  },
  addHover: function(event) {
    $(event.currentTarget).addClass('hover');
  },
  removeHover: function(event) {
    $(event.currentTarget).removeClass('hover');
  }
});