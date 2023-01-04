import express from 'express';

const APP   = express();
const PORT  = 5000;

APP.get('/', (req, res) => {
    res.send('Hello World');
});


APP.listen(PORT, () => {
    console.log(`Server is established on port ${PORT}`);
});