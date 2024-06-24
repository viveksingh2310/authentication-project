import { app } from "./index.js";
app.listen(4000,()=>{
    console.log('server is listening on port number 4000');
})
app.get('/',(req,res)=>{
    res.send("you have entered the authentication website successfully");
})