var mongo = require('mongoose');
//mongo.connect('mongodb://inami:swinburne@alex.mongohq.com:10017/app16037076');


// the Entitiy - are they are charity or company
var entityMdl = {
	name : { type: String, index: { unique : true, dropDups: true } },
	abn : { type: String, index: { unique : false, dropDups: true } },
	address : { 
				number : String, 
				street : String, 
				suburb : String, 
				city : String, 
				postcode : String,
				country : String
			},
	phone : {
			countryCode :  String,
			areaCode :  Number,
			number :  Number 
	},
	dateAdded :  { type: Date, default: Date.now },
	isActive : Boolean,
	entityType : String
}

// the Collector (person) model
var collectorMdl = {
	name : { type: String, index: { unique : false, dropDups: false } },
	gender : String,
	photo : { url : String, title : String },
	driversLicence : String,
	dateAdded :  { type: Date, default: Date.now },
	isActive : Boolean,
	location : {
			lat: String,
			lng: String,
			when : { type: Date, default: Date.now }
	},
}


exports.Entity = mongo.model('Entity', new mongo.Schema(entityMdl));
exports.Collector = mongo.model('Collector', new mongo.Schema(collectorMdl));