const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/photoSite';
mongoose.connect(connectionString, {useNewUrlParser: true});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is running you better go catch it')
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected')
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose error', err)
});