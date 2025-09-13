import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String, 
        require:true, 
        trim:true
    },
    status: {
        type: String, 
        enum:['active','complete'], 
        default: 'active'
    },
    completedAt: {
        type: Date, 
        default:null
    },
},
{
    timestamps: true // createdAt va UpdateAt auto them vao
})

const Task = mongoose.model('task',taskSchema)

export default Task