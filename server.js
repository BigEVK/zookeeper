const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');

const router = require('./routes/apiRoutes/animalRoutes');



app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// ******** Both the above middleware functions need to be set up every ******
// ******** time you create a server that's looking to accept POST data *********
app.use(express.static('public'));
// Parse incoming string or array data

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
