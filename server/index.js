const express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())
app.listen(3000, ()=> console.log('server on port 3000'))

// routes
app.get('/',
    (req,res) => res.send('server working!!!')
)
app.get('/jsdades',
    (req,res)=>{
        console.log(req)
        res.send('ok!')
    }
)