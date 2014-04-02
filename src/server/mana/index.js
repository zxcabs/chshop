/**
 * User: Evgeny Reznichenko
 * Date: 03.04.14
 *
 */

var
	express = require('express'),
	app = module.exports = express();

app.get('/', function (req, res, next) {
	res.send('Hello Mana');
});