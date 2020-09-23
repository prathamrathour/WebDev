var mongoose= require('mongoose');

var moviesSchema= new mongoose.Schema({
	name:String,
	releaseYear:String,
	category:String,
	imdb:String,
	imageurl:String,
	videourl:String



});

module.exports = mongoose.model("Movies",moviesSchema);