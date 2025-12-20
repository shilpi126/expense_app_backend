const express = require("express");
const app = express();
const db = require("./utils/db.connection");
const userRouter = require("./routes/userRoutes");
const expenseRouter = require("./routes/expenseRoutes");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.use("/user", userRouter);
app.use("/expense", expenseRouter);


const startServer = async()=>{
    try{
        await db.sync({force:false});

        app.listen(4000,()=>{
        console.log("server is running on port 4000");
        })

    }catch(err){
        console.error(err);
        
    }
}

startServer();



