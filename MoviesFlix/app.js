var express=require('express');
var app=express();
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

var Movies = require('./models/movies.js');
mongoose.connect('mongodb://localhost/moviedata',{
	useNewUrlParser:true,
	useUnifiedTopology:true
})

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/MoviesFlix",function(req,res){
	
	Movies.find({},function(err,allMovies){
		if(err){
			console.log(err);
		}
		else{
			res.render("home.ejs",{movies:allMovies});
		}
	}).sort({releaseYear:-1});
});

app.get("/new",function(req,res){
	res.render("new.ejs");
});

app.post("/new",function(req,res){
	var name= req.body.name;
    var releaseYear =req.body.releaseYear;
    var category =req.body.category;
    var imdb =req.body.imdb;
    var imageurl =req.body.imageurl;
    var videourl =req.body.videourl;
    var newMovie={name:name,releaseYear:releaseYear,category:category,imdb:imdb,imageurl:imageurl,videourl:videourl};
         
         //create new campground and save
         Movies.create(newMovie,function(err,newlyCreated){
          if(err){
            console.log(err);
          }else{
            res.redirect("/MoviesFlix");
          }
});
     });

app.get("/MoviesFlix/:id",function(req,res){
	Movies.findById(req.params.id,function(err,foundMovie){
		if(err){
			console.log(err);
		}
		else{
			res.render("show.ejs",{movie:foundMovie});
		}
	});
});


app.listen(3000,function(){
	console.log("MovieFlix server Started");
});