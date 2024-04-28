import { IoAddSharp } from "react-icons/io5";

const AddToDo = () => {
  return (
    <form className="flex items-center gap-1 mx-5 mt-10">
        <input type="text" placeholder="Add your task....." required 
        className="bg-slate-200 outline-none w-[100%] p-3 rounded-md " />
        <IoAddSharp className='w-10 h-10 p-1 hover:bg-slate-200 text-green-600 cursor-pointer rounded-full'/>
    </form>
  )
}

export default AddToDo