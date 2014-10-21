NewsReader.Collections.Feeds = Backbone.Collection.extend({
  initialize: function() {

  },

  model: NewsReader.Models.Feed,

  url: 'api/feeds',

});