import express from 'express';

const app = express();





app.listen(3000,(err)=>{
    if (!err)
    {
        console.log('Server is Running on port 3000');
    }
    else{
        console.log('Error on Running on port 3000');
    }
})