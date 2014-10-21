NewsReader.Views.ShowFeed = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },
  tagName: 'ul',
  template: JST['feeds/show'],
  events: {
    'click #refresh-button' : 'reload'
  },
  render: function() {
    var renderedTemplate = this.template({
      feed: this.model
    });

    this.$el.html(renderedTemplate);
    return this;
  },
  reload: function() {
    this.model.fetch();
  }

})