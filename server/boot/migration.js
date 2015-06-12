var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

app.dataSources.postgres.autoupdate(['car','Make'], function(err) {
  console.log(err);
});
