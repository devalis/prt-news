fs = require('fs')
fs.readFile('C:/Users/sofia.alys/Desktop/Software/PrtNews/news/src/posts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});