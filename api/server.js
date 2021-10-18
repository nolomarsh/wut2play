//******************
//** Dependencies **
//******************
const express = require('express')
const app = express()
const postgres = require('./postgres.js')
// const cors = require('cors')

//*****************
//** Controllers **
//*****************
// const peopleController = require('./controllers/people.js')

//****************
//** Middleware **
//****************
// app.use(cors())
app.use(express.json())
app.use(express.static('public'))
// app.use('/people', peopleController)


app.get('/', (req,res) => {
    res.send('Hello World')
})
//****************
//*** Listener ***
//****************
postgres.connect()

app.listen(process.env.PORT || 3000, () => {
    console.log('listening at', process.env.PORT || 3000)
})
