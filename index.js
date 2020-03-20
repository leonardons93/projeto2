var http = require('http');
var server = http.createServer( function (req,res) {
    var categotia = req.url;

    if ( categotia == '/quemsomos') {

        res.end("<html><body>noticias teste</html></body>")
        
    } else if (categotia == '/contatos') {
        res.end("<html><body>noticias teste</html></body>")
        
    } else if (categotia == '/home') {
        res.end("<html><body>noticias teste</html></body>")

   }
   else{

        res.end("<html><body>noticias teste</html></body>")
   }


}).listen(3000);