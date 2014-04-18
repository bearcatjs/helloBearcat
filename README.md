This is a helloworld example project using Bearcat

Using bearcat in project  
* add npm dependency to your project  
```
npm install bearcat --save
```

* write simple POJOs
helloBearcat.js
```
var HelloBearcat = function() {

}

HelloBearcat.prototype.hello = function() {
	console.log('hello bearcat');
}

module.exports = HelloBearcat;
```

* write simple meta definition
context.json
```
{
	"name": "helloBearcat",
	"beans": [{
		"id": "helloBearcat",
		"func": "helloBearcat"
	}]
}
```

* write main code to run helloBearcat application
app.js
```
var Bearcat = require('bearcat');
var contextPath = require.resolve('./context.json');

var bearcat = Bearcat.createApp([contextPath]);
bearcat.start(function(){
   var helloBearcat = bearcat.getBean('helloBearcat');
   helloBearcat.hello();
});
```

* just run it
```
node app.js
```

