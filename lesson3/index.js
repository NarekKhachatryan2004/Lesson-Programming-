var express = require("express");
var app = express();


app.get("/google.com",function(req ,res){
    var google = req.params.google;
    res.redirect('https://www.google.com/');

});
app.get("/search/:search",function(req,res){
    var search = req.params.search;
    res.redirect('https://www.google.com/search?q=' +search+'&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZn8n8_YbiAhVDI1AKHVbkADUQ_AUIDigB&biw=1920&bih=898')
});
app.get("/*",function(req,res){
    res.send("<h1>Error 404</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
