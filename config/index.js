/**
 * User: Evgeny Reznichenko
 * Date: 02.04.14
 *
 */


var
	path = require('path'),
	configDirName = process.env.NODE_ENV ? process.NODE_ENV.toLowerCase(): 'development';

console.log('load "%s" config', configDirName);
module.exports = require(path.join(__dirname, configDirName));