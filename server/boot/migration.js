var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.postgres;

dataSource.discoverSchema('car', {schema: 'public'},
  function(err, schema) {
	  if (err) throw err;

	  if (schema) {
			// console.log(JSON.stringify(schema, null, '  '));
			console.log('found schema, updating');
			dataSource.autoupdate('car');
		} else {
			console.log('schema not found');
			dataSource.automigrate('car');
		}

	  dataSource.disconnect();
});
