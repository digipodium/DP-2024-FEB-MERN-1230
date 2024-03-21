const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabase7654?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function  - returns Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;