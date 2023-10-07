require('dotenv').config();

const express = require('express');
const app = express();
// adding database
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// enable connection
const db = mongoose.connection;
db.on('error', (error) => { console.error(error) });
db.once('open', () => console.log("Connected to database"));


app.use(express.json());

// lets create routes for subscribers

const subsRoutes = require('./routes/subscribers')
app.use('/subscribers', subsRoutes);



app.listen(process.env.APP_PORT || 5000, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
})