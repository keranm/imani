var db = require('./db/schema');
var express = require('express');
var feedService = require('./feedservice');

var app = express();
app.use(express.bodyParser());
app.use(express.compress());
app.set('json spaces', 0);
app.get('/app/*', function (req, res) {
  	res.sendfile(__dirname + "/gui/" + req.path);
});

app.post('/Article/markRead', function (req, res) {
	db.Article.update({ _id : req.body.id  }, { isRead : true }).exec();
	res.send(200);
});

app.get('/getArticles/:isRead', function (req, res) { 
	//feedService.getFeeds();
	
	var condition = Boolean(req.params.isRead)?{}:{ isRead : false };
	db.Article.find(condition).select({ 
		title: 1,
		link: 1,
		isRead: 1,
		_ts: 1,
		comments: 1,
		metaLink: 1
	}).exec(function(err, data) {
		res.json(data);
	});
});

app.get('/getFeeds', function(req, res) {
	db.Meta.find({}, function(err, data) {
		res.json(data);
	});
});

app.listen(80);
console.log("listening on port 80");
