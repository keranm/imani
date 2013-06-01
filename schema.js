var mongo = require('mongoose');
mongo.connect('mongodb://localhost/test');

var metaMdl = { 
	link : { type: String, index: { unique : true, dropDups: true } },
	title : String,
	description : String,
	xmlurl : String,
	date : Date,
	pubdate : Date,
	author : String,
	language : String,
	image : { url : String, title : String },
	favicon : String,
	copyright : String,
	generator : String,
	categories : [String]
}

var ArticleSchema = new mongo.Schema({
	_ts : Number,
	link : { type: String, index: { unique : true, dropDups: true } },
	title : { type: String, index: { unique : true, dropDups: true } },
	description : String,
	summary : String,
	origlink : String,
	date : Date,
	pubdate : Date,
	author : String,
	guid : String,
	comments : String,
	image : { url : String, title : String },
	categories : [String],
	source : { url : String, title : String },
	enclosures : { url : String, type : String, length : String },
	isRead : { type: Boolean, default: false },
	metaLink : String
});

exports.Article = mongo.model('Article', ArticleSchema);
exports.Meta = mongo.model('Meta', new mongo.Schema(metaMdl));
