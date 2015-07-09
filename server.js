// app.listen(80);

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8000;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
app.listen(port, address);
