'use strict';

var app = {};
const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://es-booklist.herokuapp.com';
ENV.devlopmentApiUrl = 'localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.devlopmentApiUrl;

(function(module){

  function errorCallBack(err) {
    console.error(err);
    //module.errorView.initErrorPage(err);
  }

  function Book(bookData) {
    Object.keys(bookData).forEach(key => this[key] = bookData[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.sort((a,b) => b.title - a.title).map(book => new Book(book));
  };

  Book.fetchAll = callback =>
    $.get(`${ENV.apiUrl}/test`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallBack);

  module.Book = Book;

})(app);