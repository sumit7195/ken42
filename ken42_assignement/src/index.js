const app =  require("./app")


const mongoose  = require("mongoose");


const port = 3001;

app.listen(port, async()=>{

mongoose
  .connect(
    "mongodb+srv://sumit624:sumit123@cluster0.tuu1kv7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("Db is connected successfully"))
  .catch((error) => {
    console.log(error);
  });


  console.log(`listening on  ${port} `)

})




//  password
//  sumit123