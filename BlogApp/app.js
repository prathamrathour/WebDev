var express=require("express");
var app =express();
var methodOverride =require("method-override");
var expressSanitizer=require("express-sanitizer")
var bodyParser=require("body-Parser");
var mongoose=require("mongoose");

//app config
mongoose.connect("mongodb://localhost/restful_blog_app",{
	useNewUrlParser:true,
	useUnifiedTopology:true
});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//mongoose model config

var blogSchema = new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created:{type:Date,dfault:Date.now}
});

var Blog= mongoose.model("Blog",blogSchema);
/*Blog.create({
	title:"Test Blog",
	image:"https://www.oregonlive.com/resizer/0FVk7bpZHdb--Lw10Y-443t0ylM=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/DUNWFNGOAVCRLAHO4ZPTBKNJEM.jpg",
	body:"Hello this is a blog post"
});*/

//Restful routes

app.get("/",function(req,res){
	res.redirect("/blogs");
});
//index route
app.get("/blogs",function(req,res){

	Blog.find({},function(err,blogs){
		if(err){
			console.log("Error");
		}else{
			res.render("index",{blogs:blogs});

		}
	});
	});


//new route
app.get("/blogs/new",function(req,res){
       res.render("new");
});


//create route

app.post("/blogs",function(req,res){
	req.body.blog.body=req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog,function(err,newBlog){
    	if(err){
    		res.render("new");
    	}else{
    		res.redirect("/blogs");
    	}
    });
});

//show route
app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.render("show",{blog:foundBlog});
		}
	})
});

//edit route

app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
          if(err){
          	res.redirect("/blogs");
          }else{
          	res.render("edit.ejs",{blog:foundBlog});
          }
	});

});

//update route
	app.put("/blogs/:id",function(req,res){
		req.body.blog.body=req.sanitize(req.body.blog.body);
		Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){
			if(err){
				res.redirect("/blogs");
			}
			else{
                    res.redirect("/blogs/"+req.params.id);
			}
		});
	});

// destroy route 

app.delete("/blogs/:id",function(req,res){
	Blog.findByIdAndRemove(req.params.id,function(err){
  if(err){
  	res.redirect("/blogs");
  }else{
  	res.redirect("/blogs");
  }
	});
    

});

app.listen(3000,function(){
	console.log("server is running");
});
