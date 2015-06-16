var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var seeds = require('./db-seed.json');

if (process.env.NODE_ENV === "development") {
  app.dataSources.postgres.automigrate(['Car','Make', 'Owner'], function(err) {
    console.log('deleting previous tables and seeding database.');
    seeds.models.forEach(function(seed) {
      app.models[seed.name].create(seed.data);
    });
  });
} else {
  app.dataSources.postgres.autoupdate(['Car','Make'], function(err) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log('updated models, no errors');
    }
  });
}
