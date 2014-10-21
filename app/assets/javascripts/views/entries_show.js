NewsReader.Views.ShowEntry = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },
  tagName: 'li',
  template: JST['entries/show'],
  render: function() {
    var content = this.template({
      feed: this.model
    });

    this.$el.html(renderedTemplate);
    return this;
  }
});