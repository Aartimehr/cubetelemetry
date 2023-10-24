const express = require('express');
const app = express();


const ProductRoute = require('./Routes/product.route');
app.use('/products', ProductRoute);


app.use((req,res,next)  => {
    const err = new Error("Not found")
    err.status=404
    next(err)
});


//error handler
app.use((err,req,res,next)  => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500 ,
            message: err.message
        }
    });
   
});
app.listen(3000,() => {
    console.log("node api app is running on port 3000");

}); 
