const express = require('express')
const router = express()
const User  = require('../models/user')

router.post('/', async (req,res)=>{
    try {
        const { name, email,password } = req.body;
        if(name  === ''){
                throw new Error('name is required')
        }
        const myuser = await User.findAll({where:{email:email}, raw: true })
        if (myuser[0]) {
            throw new Error('user olready esist')
        }
        
        const user = {name, email, password}

        const data = await User.create(user)
        // console.log(data);
        
        res.json({message:'user registred'})
    } catch (error) {
        
        res.status(500).json({message:error.message})
        
    }
})

module.exports = router