NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  url: function() { return this.feed.url() + '/entries' },
  comparator: 'published_at'
});