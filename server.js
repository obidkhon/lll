const express=require('express')
const exphbs= require('express-handlebars')
const dotenve =require('dotenv')
const app =express()
dotenve.config()

app.use(express.json())

app.use( '/',require('./routs/WriteText'))





app.engine('hbs',exphbs({
    defaultLayout:'main',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')


const port =process.env.PORT||3000



app.listen(port,()=>{
    console.log(` men ${port}inchi prtni eshitim`)
})