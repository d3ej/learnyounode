//var fs = require('fs');

//var x = fs.readFileSync(process.argv[2]).toString();

//var count = x.split('\n');

//console.log(count.length -1);

//begin filtered ls exercise
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback (err, files) {
	if (err) return console.error(err);
	for (i = 0; i < files.length; i++) {
	if (path.extname(files[i]).substring(1) === process.argv[3]) {
		console.log(files[i]);
	};

	};
});


