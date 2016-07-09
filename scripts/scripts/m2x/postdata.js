/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var http = require('http');
var requestObj = {
  "url": 'https://api-m2x.att.com/v2',
  "method": 'PUT'
};

requestObj.headers = {
  "Content-Type": 'application/json',
  "X-M2X-KEY": '8c57404c58743081ab47a68c9f67409a'
};

requestObj.url += '/devices/757e63b7ac11490712ddc43c11cfcdee';
requestObj.url += '/streams/temperature/value';

var body = {
  "value": 288
};

requestObj.bodyString = JSON.stringify(body);

var res = http.request(requestObj);

return res;			