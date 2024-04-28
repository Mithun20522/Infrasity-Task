import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoAddSharp } from "react-icons/io5";

const AddToDo = ({editTodo,onAddOrUpdate}) => {
    const [addedTodo, setAddedTodo] = useState({});

    useEffect(() => {
    if (editTodo) {
      setAddedTodo({ todo: editTodo.todo });
    }
  }, [editTodo]);

  const handleChange = (e) => {
    setAddedTodo({
      ...addedTodo,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (editTodo) {
        res = await fetch(`http://localhost:8080/api/todo/update-todo/${editTodo._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(addedTodo)
        });
      } else {
        res = await fetch('http://localhost:8080/api/todo/add-todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(addedTodo)
        });
      }
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setAddedTodo({ todo: '' });
        onAddOrUpdate();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  return (
    <form className="flex items-center gap-1 mx-5 mt-10" onSubmit={handleSubmit}>
        <input value={addedTodo.todo}  id="todo" onChange={(e) => handleChange(e)} type="text" placeholder="Add your task....." required 
        className="bg-slate-200 outline-none w-[100%] p-3 rounded-md " />
        <button type="submit" className="p-1 hover:bg-slate-200 text-green-600 cursor-pointer rounded-full">
            <IoAddSharp className="text-2xl" />
        </button>
    </form>
  )
}

export default AddToDo