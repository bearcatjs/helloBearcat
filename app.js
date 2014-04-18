var Bearcat = require('bearcat');
var contextPath = require.resolve('./context.json');

var bearcat = Bearcat.createApp([contextPath]);
bearcat.start(function() {
	var helloBearcat = bearcat.getBean('helloBearcat');
	helloBearcat.hello();
});