const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//Data
const nutrients = {
    'vitamin a': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 900,
        'birthTo12Months': 500,
        'age1To3Years': 300,
        'pregOrLactating': 1300
    },

    'vitamin c': {
        'unitOfMeasure': 'mg',
        'olderThan4': 90,
        'birthTo12Months': 50,
        'age1To3Years': 15,
        'pregOrLactating': 120
    },
    'unknown': {
        'unitOfMeasure': 'none',
        'olderThan4': 0,
        'birthTo12Months': 0,
        'age1To3Years': 0,
        'pregOrLactating': 0
    }
}

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:nutrient', (req, res) => {
    const nutrientName = req.params.nutrient.toLowerCase();

    nutrients[nutrientName] ? res.json(nutrients[nutrientName]) : res.json(nutrients['unknown']);
});

app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`);
})