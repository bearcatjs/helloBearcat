var HelloBearcat = function() {
	this.$id = "helloBearcat";
}

HelloBearcat.prototype.hello = function() {
	console.log('hello bearcat');
}

module.exports = HelloBearcat;