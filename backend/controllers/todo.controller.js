import Todo from '../models/todo.model.js';
export const addTodo = async(req, res) => {
    try {
        const {todo} = req.body;
        if(!todo){
            return res.status(404).json({message:'Please enter a todo to proceed'});
        }
        const exist = await Todo.findOne({todo});
        if(exist){
            return res.status(409).json({message:'To do already exist'});
        }
        const newTodo = new Todo({todo});

        await newTodo.save();
        return res.status(201).json({message:'New todo added', newTodo});

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getAllTodo = async(req, res) => {
    try {
        const todos = await Todo.find();
        if(todos.length === 0){
            return res.status(404).json({message:'You have no todo yet'});
        }

        return res.status(200).json(todos);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({message:'no todo found'});
        }
        return res.status(200).json({message:'todo deleted successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const updateTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body, {new:true});
        if(!todo){
            return res.status(404).json({message:'no todo found'});
        }
        return res.status(200).json({message:'todo updated successfully', todo});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}