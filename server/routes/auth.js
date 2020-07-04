const express = require('express')
const auth = express()
const User  = require('../models/user')
const jwt = require('jsonwebtoken')
const refreshtokns = require('../models/refreshtoken')

auth.post('/',(req,res)=>{
  console.log( req.user);
  
})

module.exports = auth