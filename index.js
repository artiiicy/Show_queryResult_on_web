const mdbConn = require('./mariaDBConn.js')
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function(req, res)
{
        res.render('client.html')
});


/* POST helo page. */
app.post('/hello', function(req, res, next)
{
        var str = req.query.input1;
        console.log(`query : ${str}`);

	var result;	
	mdbConn.getUserList(str)
	.then((rows) => {
		console.log(result);
		res.json( {msg: rows} );
	})
	.catch((errMsg) => {
		console.log(errMsg);
	});
});


const port = process.env.PORT || 8085;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
