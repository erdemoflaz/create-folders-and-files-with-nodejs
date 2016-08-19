var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
  
		// aldığım pathname i slashlardan split edip dizi haline getirdim.
		var str = req.originalUrl;
	    var res = str.split("/");
		var fs = require("fs");

		for (var i = res.length - 1; i >= 0; i--) {
			    	
	    	if(i==(res.length - 1)){

	    		console.log("sonuncu "+res[i]);
	   			fs = require('fs');
				fs.writeFile(res[i]+".js", function (err) {
				 if (err) return console.log(err);
				 	console.log('dosya kaydedildi.');
				});

	    	}
	    	else {
	    				
				var fs = require("fs");
				fs.mkdir(res[i], function (make_a_folder) {
				    if (make_a_folder) {
				        console.log('klasör oluşturuldu.');
				    }
				});
	    	}
		};
 // console.log(req.originalUrl);
  next();
});
app.listen(3000, function () {
  console.log('PORT:3000');
});