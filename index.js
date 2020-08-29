const path = require('path');
const express = require('express');
const app = express();

//settings server
app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'public')));

//para iniciar el server
const server = app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
})

