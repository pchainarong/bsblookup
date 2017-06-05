const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const bsbRouter     = require('./app/bsbRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

app.use('/bsb', bsbRouter);

app.get('/', function(req, res) {
    res.send({message :'API use /bsb'});   
});

app.listen(port, function(){
	console.log('Magic happens on port ' + port);	
});
