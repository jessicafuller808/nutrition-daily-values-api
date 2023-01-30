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
    'calcium': {
        'unitOfMeasure': 'mg',
        'olderThan4': 1300,
        'birthTo12Months': 260,
        'age1To3Years': 700,
        'pregOrLactating': 1300
    },
    'iron': {
        'unitOfMeasure': 'mg',
        'olderThan4': 18,
        'birthTo12Months': 11,
        'age1To3Years': 7,
        'pregOrLactating': 27
    },
    'vitamin d': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 20,
        'birthTo12Months': 10,
        'age1To3Years': 15,
        'pregOrLactating': 15
    },
    'vitamin e': {
        'unitOfMeasure': 'mg',
        'olderThan4': 15,
        'birthTo12Months': 5,
        'age1To3Years': 6,
        'pregOrLactating': 19
    },
    'vitamin k': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 120,
        'birthTo12Months': 2.5,
        'age1To3Years': 30,
        'pregOrLactating': 90
    },
    'thiamin': {
        'unitOfMeasure': 'mg',
        'olderThan4': 1.2,
        'birthTo12Months': 0.3,
        'age1To3Years': 0.5,
        'pregOrLactating': 1.4
    },
    'riboflavin': {
        'unitOfMeasure': 'mg',
        'olderThan4': 1.3,
        'birthTo12Months': 0.4,
        'age1To3Years': 0.5,
        'pregOrLactating': 1.6
    },
    'niacin': {
        'unitOfMeasure': 'mg',
        'olderThan4': 16,
        'birthTo12Months': 4,
        'age1To3Years': 6,
        'pregOrLactating': 18
    },
    'vitamin b6': {
        'unitOfMeasure': 'mg',
        'olderThan4': 1.7,
        'birthTo12Months': 0.3,
        'age1To3Years': 0.5,
        'pregOrLactating': 2
    },
    'folate': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 400,
        'birthTo12Months': 80,
        'age1To3Years': 150,
        'pregOrLactating': 600
    },
    'vitamin b12': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 2.4,
        'birthTo12Months': 0.5,
        'age1To3Years': 0.9,
        'pregOrLactating': 2.8
    },
    'biotin': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 30,
        'birthTo12Months': 6,
        'age1To3Years': 8,
        'pregOrLactating': 35
    },
    'pantothenic acid': {
        'unitOfMeasure': 'mg',
        'olderThan4': 5,
        'birthTo12Months': 1.8,
        'age1To3Years': 2,
        'pregOrLactating': 7
    },
    'phosphorus': {
        'unitOfMeasure': 'mg',
        'olderThan4': 1250,
        'birthTo12Months': 275,
        'age1To3Years': 460,
        'pregOrLactating': 1250
    },

    'iodine': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 150,
        'birthTo12Months': 130,
        'age1To3Years': 90,
        'pregOrLactating': 290
    },

    'magnesium': {
        'unitOfMeasure': 'mg',
        'olderThan4': 420,
        'birthTo12Months': 75,
        'age1To3Years': 80,
        'pregOrLactating': 400
    },

    'zinc': {
        'unitOfMeasure': 'mg',
        'olderThan4': 11,
        'birthTo12Months': 3,
        'age1To3Years': 3,
        'pregOrLactating': 13
    },

    'selenium': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 55,
        'birthTo12Months': 20,
        'age1To3Years': 20,
        'pregOrLactating': 70
    },

    'copper': {
        'unitOfMeasure': 'mg',
        'olderThan4': 0.9,
        'birthTo12Months': 0.2,
        'age1To3Years': 0.3,
        'pregOrLactating': 1.3
    },

    'manganese': {
        'unitOfMeasure': 'mg',
        'olderThan4': 2.3,
        'birthTo12Months': 0.6,
        'age1To3Years': 1.2,
        'pregOrLactating': 2.6
    },

    'chromium': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 35,
        'birthTo12Months': 5.5,
        'age1To3Years': 11,
        'pregOrLactating': 45
    },

    'molybdenum': {
        'unitOfMeasure': 'mcg',
        'olderThan4': 45,
        'birthTo12Months': 3,
        'age1To3Years': 17,
        'pregOrLactating': 50
    },

    'chloride': {
        'unitOfMeasure': 'mg',
        'olderThan4': 2300,
        'birthTo12Months': 570,
        'age1To3Years': 1500,
        'pregOrLactating': 2300
    },

    'potassium': {
        'unitOfMeasure': 'mg',
        'olderThan4': 4700,
        'birthTo12Months': 700,
        'age1To3Years': 3000,
        'pregOrLactating': 5100
    },

    'choline': {
        'unitOfMeasure': 'mg',
        'olderThan4': 550,
        'birthTo12Months': 150,
        'age1To3Years': 200,
        'pregOrLactating': 550
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

    nutrients[nutrientName] ? res.json(nutrients[nutrientName]) : 
    res.json(nutrients['unknown']);
});

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`);
})