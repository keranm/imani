var db = require('./db/schema');
var express = require('express');

var app = express();
app.use(express.bodyParser());
app.use(express.compress());
app.set('json spaces', 0);
app.get('/app/*', function (req, res) {
  	res.sendfile(__dirname + "/gui/" + req.path);
});


app.post('/api/updateCollector', function (req, res) {
	db.Article.update({ _id : req.body.id  }, { isRead : true }).exec();
	res.send(200);
});


app.get('/api/getCollector/:isActive', function (req, res) { 
	//feedService.getFeeds();
	
	var condition = Boolean(req.params.isRead)?{}:{ isActive : true };
	db.Article.find(condition).select({}).exec(function(err, data) {
		res.json(data);
	});
});


app.get('/api/getEntity', function(req, res) {
	db.Entity.find({}, function(err, data) {
		res.json(data);
	});
});

app.listen(5000);
console.log("listening on port 5000");
