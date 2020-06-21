const express = require('express')
const login = express()
const User  = require('../models/user')
const jwt = require('jsonwebtoken')
const refreshtokns = require('../models/refreshtoken')

login.post('/', async (req,res)=>{
    try {
        const { email,password } = req.body

    const data = await User.findAll({where:{email:email}, raw: true })
    
        if(data[0].password === password){
            const {id,name,email} = data[0];
            const user = { id,name,email }
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '20m'
              })
            const accessToken = generateAccessToken(user)
            const token = await refreshtokns.findAll({where:{userId:id}, raw: true })  
           if(token.length){
            await  refreshtokns.destroy({where: {userId:id}, raw: true  })
           }
           const newToken = await refreshtokns.create({id,token:refreshToken})
           return res.json({
                user,
                refreshToken,
                accessToken
              })
            
        }
     
      
        res.json({message:'user logind'})
    }catch (error) {
        console.log(error);
        
    }
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '5m'
    })
  }

module.exports = login