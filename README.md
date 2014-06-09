## This is a helloworld example project using Bearcat  

Using bearcat in project  
* add npm dependency to your project  
```
npm install bearcat --save
```

* write simple POJOs  
create app directory, write helloBearcat.js in this directory  
app/helloBearcat.js  
```
var HelloBearcat = function() {
	// $ based parameters annotation defines POJO id
	this.$id = "helloBearcat";
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
	"scan": "app"
}
```

* write main code to run helloBearcat application  
app.js
```
var bearcat = require('bearcat');
var contextPath = require.resolve('./context.json');

bearcat.createApp([contextPath]);
bearcat.start(function(){
   var helloBearcat = bearcat.getBean('helloBearcat');
   helloBearcat.hello();
});
```

* just run it
```
node app.js
```