var fs = require('fs');

exports.lowerCase = function(myFile) {
	console.log(myFile);
	
	if(fs.existsSync(myFile)) {
		var content = fs.readFileSync(myFile, 'utf8');
		console.log(content.toLowerCase());
	} else {
		console.log('File does not exist - ' + myFile);
	}
}