const express = require('express')
const router = express()
const User  = require('../models/user')

router.post('/', async (req,res)=>{
    try {
        const { name, email,password } = req.body;
    const user = {name, email, password}
  const data = await User.create(user)
        console.log(data);
        
        res.json({message:'user registred'})
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router