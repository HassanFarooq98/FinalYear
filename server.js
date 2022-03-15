const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
//Connect to Databaase


connectDB();
// Init Middleware
app.use(express.json({ extended: false}));
app.use(cors());


const PORT = process.env.PORT || 5000;

// Server Route
app.get('/', (req, res) => res.send('Running'));

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));


app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});