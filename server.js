const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;
const nutrients = require('nutrients');


//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:nutrient', (req, res) => {
    const nutrientName = req.params.nutrient.toLowerCase();

    nutrients[nutrientName] ? res.json(nutrients[nutrientName]) : 
    res.json(nutrients['unknown']);
});

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`);
})