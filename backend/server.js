const express = require('express')
const app = express()

const ProductRoute = require('./Routes/Products.route')
app.use('/products',ProductRoute);


app.listen(3000,()=> { 
    console.log('Node API app is running on port 3000')
})
 
