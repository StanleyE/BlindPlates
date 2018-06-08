const express = require('express'),
      router = express.Router();

router.post('/auth/register', (req, res)=>{
    res.send('hit the route in other file');
});

// declarfe all routes on the router
router.post('/auth/login', (req, res)=>{
    let {email, password} = req.body;
    // let user = find user in db
})

// //Login 
// app.post('/login', (req, res)=>{
//     //let {email, password} = req.body;
//     let password = brainstation2018;    
//     bcrypt.genSalt(12, (err, salt)=>{
//         if(err){
//             return console.log(err);
//         } else {
//             bcrypt.hash(password, salt)
//         }
//     })
// })

module.exports = router;