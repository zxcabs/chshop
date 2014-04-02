/**
 * User: Evgeny Reznichenko
 * Date: 02.04.14
 *
 */

var
	config = require('./config'),
	server = require('./src/server');


server.listen(config.http.port, function (err) {
	if (err) return console.error(err);
	console.log('Server run on: ', config.http.port);
});