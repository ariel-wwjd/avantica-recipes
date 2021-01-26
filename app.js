const express = require('express');
const viewsRouter = require('./routes/viewsRouter')();

const app = express();

const port = '4000';

app.use(express.static('public'));
app.use('./css', express.static(__dirname + 'public/css'));
app.use('./images', express.static(__dirname + 'public/images'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/api', viewsRouter);

app.server = app.listen(port, () => {
    console.log(`running in port ${port}`);
});
