const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;
const nutrients = require('./data');


//Routes
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/', (request, response) => {
    response.json(nutrients);
});

app.get('/api/:nutrient', (request, response) => {
    const nutrientName = request.params.nutrient.toLowerCase();

    nutrients[nutrientName] ? response.json(nutrients[nutrientName]) : 
    response.json(nutrients['unknown']);
});

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`);
})