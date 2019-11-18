const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://86dc755e21594be2b8bb81c16247b07e@sentry.io/1824767' });

Sentry.configureScope(function(scope) {
    scope.setTag("my-tag", "6030213053");
    scope.setUser({
      email: "john.doe@example.com",
      username: 'Lalita Sathansat'
    });
   });
   
const calculator = require('./calculate');

myUndefinedFunction();