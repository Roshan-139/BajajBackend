const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find the highest alphabet
    const highestAlphabet = alphabets.length ? [ ...alphabets ].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).pop() : [];

    // Create the response
    res.json({
        is_success: true,
        user_id: "Roshan Priyadarshi 29/12/2003",
        email: "rh8152@srmist.edu.in",
        roll_number: "RA2111026010139",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
