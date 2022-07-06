const express = require('express');
const Bug = require('../models/bugModel');
const router = express.Router();

router.post('/create', (req, res) => {
    const newBug = new Bug(req.body);
    newBug.save((err) => {
        if (err) { console.error(err)};
    });
})

// router.get('/bugs', async (req, res) => {
    
//     const data = await Bug.find();
//     res.json(data);
  
// })

router.get('/bugs', async (req,res,next)=>{
    try{
      const bugs = await Bug.find();
  
      return res.status(200).json({
        success: true,
        count: bugs.length,
        data: bugs,
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });

module.exports = router;