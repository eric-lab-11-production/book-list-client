'use strict';
var app = app || {};

(function(module){

  const bookView = {};

  bookView.initIndexPage = function() {
    app.Book.all.map(book => $('.book-list').append(book.toHtml()));
  };

  module.bookView = bookView;

})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})();
