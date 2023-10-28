const express = require('express');
const mongoose = require('mongoose') 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

mongoose.connect('mongodb+srv://mehra11aarti:7827351031@cluster0.tjprssr.mongodb.net/?retryWrites=true&w=majority',  
  { 
    dbName:'Telemetry',
    user:'mehra11aarti',
    pass: '7827351031',
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  })

.then(() => {
    console.log('mongodb connected....');
});

app.all('/test', (req,res)   =>  {
    console.log(req.body);
    res.send(req.body);
});


const ProductRoute = require('./Routes/product.route');
app.use('/products', ProductRoute);


app.use((req,res,next)  => {
    const err = new Error("Not found");
    err.status=404
    next(err);
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
