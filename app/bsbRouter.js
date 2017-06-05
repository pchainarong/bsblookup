const express       = require('express');
const bsbDatasource = require('./bsbDatasource.js');

let router = express.Router();    
let datasource = new bsbDatasource();

router.get('/', function(req, res){
	datasource.selectAll().then(function(result){
        res.json(result);
	});
});

router.get('/:bsb_code', function(req, res){
	let bsbcode = req.params.bsb_code;
	datasource.selectByCode(bsbcode).then(function(result){
        res.json(result);
	});
});

module.exports = router;