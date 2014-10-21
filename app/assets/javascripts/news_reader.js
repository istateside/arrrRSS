window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.NewsReader.feeds = new NewsReader.Collections.Feeds();

    new NewsReader.Routers.Feeds({
      "$el": $("div.content")
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
