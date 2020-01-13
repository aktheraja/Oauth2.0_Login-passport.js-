const express  = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

////set up view engine
app.set('view engine','ejs');

//connect to mongoose
mongoose.connect(keys.mongodb.dbURl,()=>{
    console.log('connected to mongodb');
})



//set up routes
app.use('/auth',authRoutes);

//create home route
app.get('/',(req,res)=>{
    res.render('home');
});

//listen to port number
app.listen(3000,()=>{
    console.log('app now listening for request on port 3000');
});