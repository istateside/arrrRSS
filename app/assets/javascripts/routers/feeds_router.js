NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this.navHover();
  },

  routes: {
    '': 'index',
    'feeds/:id': 'feedShow'
  },

  index: function() {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this.$el.html(indexView.render().$el);
  },

  feedShow: function(id) {
    var feed;
    that = this;
    NewsReader.feeds.fetch({success: function(){
      feed = NewsReader.feeds.get(id);
      feed.fetch();

      var showView = new NewsReader.Views.ShowFeed({
        model: feed
      });
      that.$el.html(showView.render().$el);
    }});
  },

  navHover: function() {
    $('nav > a').hover(
      function(event) {
        $(event.target).addClass('hover');
      },
      function(event) {
        $(event.target).removeClass('hover');
      }
    );

    $('h1').hover(
      function(event) {
        $(event.target).addClass('hover');
      },
      function(event) {
        $(event.target).removeClass('hover');
      }
    );
  }

});