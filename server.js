const express = require('express');
const app = express();
const cors = require('cors');
const nutrients = require('./data');
require('dotenv').config();


app.use(cors());
app.use(express.static('public'));

//No longer needed with above code, all static files are already included from public folder
// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html');
// })

app.get('/api', (request, response) => {
    response.json(nutrients);
});

app.get('/api/:nutrient', (request, response) => {
    const nutrientName = request.params.nutrient.toLowerCase();

    nutrients[nutrientName] ? response.json(nutrients[nutrientName]) : 
    response.json(nutrients['unknown']);
});

app.listen(process.env.PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`);
})