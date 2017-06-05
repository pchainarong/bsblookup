Peagaus BSB Lookup API
====================

Overview
---------------------

This API is to extract BSB lists from csv file and expose as webservice.
BSB.csv is from [BSB APCA](http://bsb.apca.com.au/)

### API endpoints 
- /bsb            show all content
- /bsb/:bsb_code  query user given code, result format 

```javascript
{
"code": "012-002",
"bankCode": "ANZ",
"address": "115 Pitt Street",
"state": "NSW"
}
```

## Setup 

>Nodejs Run cmd:

`npm install && npm start` 

>Docker Run:

`docker build -t bsblookup/0.0.1 .`
`docker run -p 44600:8080 -d bsblookup:0.0.1`

## BSB History
As of June 2017, it's from BSBDirecotryMay17.csv
