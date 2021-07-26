const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();

// Local Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true })
  .then(() => console.log('Connected to database...'))
  .catch(err => console.error(err));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Controllers
const UserControl = require('./src/UserControl');
const LoginControl = require('./src/LoginControl');
const ContactControl = require('./src/ContactControl');
const CounsellingControl = require('./src/CounsellingControl');
const GetControl = require('./src/GetControl');

// Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);

app.post('/api/loginuser/create', LoginControl.create);
// app.post('/api/loginuser/update', LoginControl.update);
// app.get('/api/loginuser/retrieve', LoginControl.retrieve);
// app.delete('/api/loginuser/delete', LoginControl.delete);

app.post('/api/contactus/create', ContactControl.create);

app.post('/api/counselling/create', CounsellingControl.create);
//app.post('/api/counselling/update', CounsellingControl.update);
app.get('/api/counselling/retrieve', CounsellingControl.retrieve);
//app.delete('/api/counselling/delete', CounsellingControl.delete);

app.post('/api/get/create', GetControl.create);
app.get('/api/get/retrieve', GetControl.retrieve);

// Start Server
app.listen(3001, () => console.log('Server has started on port 3001...'));
