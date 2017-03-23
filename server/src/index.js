import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


//Routes
import auth from './routes/auth';
import articles from './routes/articles';

let app = express();

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/articles', articles);

/*app.use(express.static(path.join(__dirname, '../casaMatria-client')));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../casaMatria-client/index.html'))
});*/

app.listen(8080, () => console.log('Running on localhost:8080'));