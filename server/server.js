const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const sequelize = require('./config/db')

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

 if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
   }

  
app.use('/registr', require('./routes/register'))
app.use('/login', require('./routes/login'))
app.use('/auth', require('./routes/auth'))
  

function authenticateToken(req, res, next) {
 try {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
console.log('olla');

   
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       if (err) {
        return res.status(505).json({message:"jwt note valid"})
       }
      req.user = user
      })
    next()
  
 } catch (error) {
   console.log('jwt note valid');
   
   
 } 
 
}


app.use((req,res,next)=>{
  const error = new Error('Note Found');
  error.status = 404;
  next(error)
})
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})

sequelize.sync().then(() => {
  app.listen(port, function () {
    console.log(`Сервер ожидает подключения... ${port}`);
  });
}).catch(err => console.log(err));