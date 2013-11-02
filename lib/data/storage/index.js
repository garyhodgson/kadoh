module.exports = function(config) {
	var persistenceConfig = config.persistenceConfig || {type:'memory'}

	var a;

	if (persistenceConfig.type == 'nstore'){
		a = require('./nstore');
	} else {
		a = require('./memory');
	}

	return new a(persistenceConfig);
}