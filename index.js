const { response } = require("express");
const path=require("path");
const express=require("express");
const app=express()

const port=process.env.PORT || 3000
app.use(express.json())



app.get("/",async(req,res)=>{
try{
    var options={
        root:path.join(__dirname)
    };
    const fileName='index.html'
    

    res.sendFile(fileName,options,function(){
        console.log("file sent")
    })

    console.log("sivaji is a good boy")
}
catch{
    res.send(err)
}
})

app.post("/register",async(req,res)=>{
    const {userName,emailId,pinCode,userPassword}=req.body;
    

})

app.listen(port,() =>{
    console.log("This port is running on " + port)

})
