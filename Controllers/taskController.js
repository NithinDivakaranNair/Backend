let tasks=[];
let idCounter=1;

const createTask=(req,res)=>{
    const {title,description}=req.body;
    if(!title || !description){
        return res.status(400).json({message:"Title and description required"})
    }
    const newTask={id:idCounter++,title,description}
    tasks.push(newTask)
    res.status(201).json(newTask)
}

const getTasks=(req,res)=>{
    const{page=1,limit=5}=req.query;
    const start=(page-1)*limit;
    const end=start +parseInt(limit);
    const paginatedTask=tasks.slice(start,end);

    res.json({
        page:parseInt(page),
        limit:parseInt(limit),
        totalTask:tasks.length,
        tasks:paginatedTask
    })
}

const getTaskById=(req,res)=>{
const task=tasks.find((t)=>t.id===parseInt(req.params.id))
if(!task)return res.status(404).json({message:"Task not found"})
    res.json(task)
}


const updateTask=(req,res)=>{
    const{title,description}=req.body;
    const task=tasks.find((t)=>t.id === parseInt(req.params.id))
    if(!task)return res.status(404).json({message:"task not found"})
        if(!title || !description){
            return res.status(400).json({message:"Title and description required"})
        }
        task.title=title;
        task.description=description
        res.json(task);
}

const deleteTask=(req,res)=>{
    const index=tasks.findIndex((t)=>t.id===parseInt(req.params.id))
    if(index===-1)return res.status(404).json({message:"Task not found"})

        const deletedTask=tasks.splice(index,1)
        res.json({message:"task deleted",task:deleteTask[0]})
}


export {  getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask}