const express = require('express');
const app = express();
const port = 3001;


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    res.render('form');
});


app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('response', { name, email });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

