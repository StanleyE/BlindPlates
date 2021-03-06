const mongoose = require('mongoose');
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost/CapStone'
mongoose.connect(DB_URL);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');

//import config from './config';
require('dotenv').config(); // this line reads all the key-value pairs from your .env into process.env 
//(if issue may need to adjust path to nopush folder, or move file out)

const accountSid = process.env.TWILIO_ACCOUNT_ID;
const authToken = process.env.TWITIO_AUTHTOKEN;
const client = new twilio(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const authRouter = require('./routes/auth');


const db= mongoose.connection;
db.on('open', ()=>{
    console.log('schwoopt db connected');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('./frontend/ericas_app/build'));

const PORT = process.env.PORT || 8080;

const User = require('./models/User');

app.use('/auth', authRouter)

//Create New
// let newUser = User({
//     first_name: 'Brain',
//     last_name: 'Station',
//     nickname: 'Demo',
//     dob: '1985/06/14',
//     gender: 'Female',
//     phone_number: ,
//     coords: [-79.395358, 43.645511],
//     date_created: Date.now()
// })

// newUser.save()
//        .then(savedUser =>{
//            console.log(savedUser);
//            console.log('Save sucessful');
//        })
//        .catch(error=>{
//            console.log(error);
//            console.log('save failed')
//        });


//function that will 
    //1. take in a location of a resuarant
    //2. create a radius around location (approx 20km?)
    //3. search db for people within radias
    //4. for every person that is found
            // function prompt is exicuted


    app.post('/main/schwoopt', (req, res)=>{
        const found = [];
        let {lng, lat, name, rest, number, time, msg, conv, opt} = req.body;
        let point = {
            type: "Point",
            coordinates: [lng, lat]
        };
        
        User.aggregate([
            {
                $geoNear: {
                    'near': point,
                    'spherical': true,
                    maxDistance: 8000,
                    distanceField: 'dist'
                }
            }
            ],  
            function(err, results){
                if(err){ 
                    console.log(err);
                     return;
                }
                twilioSMS(results, name, rest, time, number, msg, conv, opt); 
                res.json(results);     
             })
    })

    twilioSMS=(results, name, rest, time, number, msg, conv, opt)=>{
        //...I'm too tried for this
        let hotBod = 'Hey, it\'s BlindPl@te, up for dinner tonight? Well ' + name + ' wants to hit up ' + rest + ' tonight at '+ time + '. They would like to talk about '+ conv +' and left a message saying "'+ msg + '". Tonight they are feeling like a '+ opt;
        // original ending to the message {if you\'re interested, here\'s their # '+number}
        // ...propbably shouldn't listen to MJ while Coding
        let smoothCriminal = ' @ Interested? Replay Yes too Accept';
        //console.log(hotBod);
        for (let i = 0; i < results.length; i++) {
           // console.log(results[i].phone_number);
            if (results[i].phone_number != undefined) {
                let phone_number = results[i].phone_number;
                    client.messages.create({
                    body: hotBod+smoothCriminal,
                    to: '+'+phone_number,
                    from: '+12892746840'
                    })
                    .then(results=>{
                        console.log(messages.sid);
                        console.log(client.messages.create.body);
                    })
                    .catch(error=>{
                        console.log(error);
                    })
            } else {
                console.log('User has not provided a contact number');
            }
            
        }
    }

// handeling 
    app.post('/sms', (req, res)=>{
        const twiml = new MessagingResponse();
        twiml.message('Great! We will let them know you are interested in meeting up!');
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    });

    twilioResponce=()=>{
        //connect to front end and change state to allow user to know somebody has replied yes to their request

    }

//express listener
    app.listen(PORT, ()=>{
        console.log('linked on', PORT);
    })