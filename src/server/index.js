/**
 * User: Evgeny Reznichenko
 * Date: 02.04.14
 *
 */

var
	express = require('express'),
	mana = require('./mana'),
	mina = require('./mina'),
	app = express();


app.use('/', mana);
app.use('/mina', mina);

module.exports = app;