const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'))
}


// API routes
app.use(routes);



// Mongo DB Connection
mongoose.connect(process.env.MONGODB_URI ||('mongodb://localhost/books'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// must use these versions or else will reveice errors "mongodb": "^3.6.3", "mongoose": "^5.11.15",

app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}`)
})