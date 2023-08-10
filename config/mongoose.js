const mongoose = require('mongoose');

// Connection to the database
mongoose.connect("mongodb+srv://vkashrai:vkashrai123@cluster0.fg7alpm.mongodb.net/skilltag", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// acquire the connection (to check if it is successful or not)
const db = mongoose.connection;
// if error
db.on('error', function (err) {
    console.log(err.message);
});
// up and runnig the print the message
db.once('open', function () {
    console.log('Successfully connected to the database');
});
