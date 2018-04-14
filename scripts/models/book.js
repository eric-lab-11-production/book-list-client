'use strict';

var app = {};
const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://es-booklist.herokuapp.com';
ENV.devlopmentApiUrl = 'localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.devlopmentApiUrl;