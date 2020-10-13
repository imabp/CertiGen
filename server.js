const {generateCertificate}=require('./editor')
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const port=5000
const app=express()
app.use(express.raw())
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));
app.get('/',(req,res)=>{
    res.send("API For generator")
})
app.post('/sendData',(req,res)=>{
                    try {
                        console.log(req.body)
                            if(req.body!=null)
                                    {
                                    let data=req.body
                                    console.log(req.body)
                                    // list={
                                    //     event_name:"Introduction To Azure",
                                    //     ambassador_name:"Salman",
                                    //     participants:["Souvik De","Vishal","Sita","Gita"]
                                    // }
                                    console.log(data)
                                    generateCertificate(data)
                                    res.send("Success")
                                    }
                                else{
                                    res.send("No Data Received.")
                                }
                    } catch (error) {
                        res.send(error);
                    }  
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })