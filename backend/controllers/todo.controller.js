import Todo from '../models/todo.model.js';
export const addTodo = async(req, res) => {
    try {
        const {todo} = req.body;
        if(!todo){
            return res.status(404).json({message:'Please enter a todo to proceed'});
        }
        const newTodo = new Todo({
            todo
        });

        await newTodo.save();
        return res.status({message:'New todo added', newTodo});
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}