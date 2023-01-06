const express   = require('express');
const APP       = express();
const PORT      = process.env.PORT || 5000;

APP.use(express.json());
APP.use(express.static('public'));

APP.get('/', (req, res) => {
    res.sendFile('/public/index.html', { root : __dirname });
});


APP.listen(PORT, () => {
    console.log(`Server is established on port ${PORT}`);
});