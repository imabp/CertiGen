const {generateCertificate}=require('./editor')
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const port=5000
const jsonExamplemessage=`{<br/> &nbsp; <b>event_name</b>:\"Name of The Event",<br/>&nbsp; <b> ambassador_name</b>: "Name of the Ambassador\",<br/>&nbsp; <b>participants</b>:[\"Person 1",\"Person 2\",\"Person 3","Person 4"]<br/>}`
const getMessage=`<center><h2> This is backend API for Certigen:</h2><h3> A Certificate Generator exclusively for MSFT Ambassador Events </h3><br><h1> 😁You are at route '/'<h1> <br><br> <h2>🧏‍♂️Here are the list of things you can do with this API for now.</center> </h2> <ul><li><b>GET '/'</b> : You are now on Help Route</li> <li><b>POST '/sendData'</b> : One and only Route for Certificate Generation. Below is the description of what you should send as Raw JSON with this POST Request. <br/><ul><li>${jsonExamplemessage}</li><ul></li></ul><li> After Successful generation of certificates you will receive response as <b>Success</b> and all certificates will be in folder named <b>certificates</b></li>`;



const app=express()
app.use(express.raw())
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));
app.get('/',(req,res)=>{
    res.send(getMessage)
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