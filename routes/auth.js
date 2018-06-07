const express = require('express'),
      router = express.Router();

router.post('/register', (req, res)=>{
    res.send('hit the route in other file');
});

// declarfe all routes on the router

module.exports = router;