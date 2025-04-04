import express from "express"
import taskRouters from "./Routes/taskRoute.js";

const app=express();
const PORT=3000;

app.use(express.json());
app.use("/task",taskRouters)

app.use((req,res)=>{
    res.status(404).json({message:"Router not found"})
})

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({message:"Internal server error"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})