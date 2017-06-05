var sqlite3 = require('sqlite3').verbose();

let file = "./pegbsb.db";
var db;

class BsbDatasource {

	constructor() {
		try {
			console.log('database file: ' + file);
			db = new sqlite3.Database(file); 
		} catch (err) {
			console.log(err.message);
		}
	}

	selectAll() {
		return new Promise((resolve, reject) => {
			try {
				let query = "SELECT code, bankCode, address, state FROM bsblookup ORDER BY code";
			    db.all(query, function(err, rows) {
			        return resolve(rows);
			    });
			} catch (err) {
				return  reject({statusCode: 400, status:err.message});
			}
		});
	}

	selectByCode(userBsbcode) {
		return new Promise((resolve, reject) => {
			try {
				let bcode = reformatCode(userBsbcode);
				console.log(userBsbcode + ":" + bcode);
				if (bcode) {
					let query = "SELECT code, bankCode, address, state FROM bsblookup WHERE code = ? LIMIT 1";
				    db.all(query, bcode, function(err, rows) {
				        return resolve(rows);
				    });
				} else {
					return resolve({});
				}
			} catch (err) {
				console.log(err.message);
				return  reject({statusCode: 400, status:err.message});
			}
		});		
	}
}

function reformatCode(code) {
	let m = code.replace('-','').match(/^\d{6}$/);
	if (m) {
		return m[0].substr(0,3) + "-" + m[0].substr(3,6);
	} else {
		return null;
	}
}

module.exports = BsbDatasource;