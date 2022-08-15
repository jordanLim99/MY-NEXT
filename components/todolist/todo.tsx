import {TrashIcon} from "@heroicons/react/outline";
import {CheckCircleIcon} from "@heroicons/react/outline";
import {PencilAltIcon} from "@heroicons/react/solid";
import {useState} from "react";
import {DocumentReference, FieldPath} from "@firebase/firestore";

export default function Todo( { todo , toggleComplete , handleDelete , handleEdit, } : any ) {
    const [ newTitle , setNewTitle ] = useState( todo.title );

    const handleChange = (e : any) => {
        e.preventDefault();
        if (todo.complete === true ) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }

    return(
        <>
            <div className="flex gap-2 text-2xl justify-center items-center bg-gray-100 rounded-md p-4 w-fit mx-auto my-2">
                <div className="w-24 text-center">
                    {todo.user ? <p className="text-md">{todo.user}</p> : <></>}
                </div>
                <div>
                    <input
                        style={{ textDecoration : todo.complete && "line-through "}}
                        type="text"
                        value={todo.title === "" ? newTitle : todo.title }
                        onChange={handleChange}
                        className="rounded-md"
                    />
                </div>
                <div className="flex gap-4 ">
                    <button
                        onClick={() => toggleComplete(todo)}>
                        <CheckCircleIcon className="h-8 w-8 text-gray-900"/>
                    </button>

                    {/*<button*/}
                    {/*    onClick={()=>{handleEdit( todo.id , newTitle )}}*/}
                    {/*>*/}
                    {/*    <PencilAltIcon className="h-8 w-8 text-gray-900"/>*/}
                    {/*</button>*/}
                    <button
                        onClick={()=>{ handleDelete(todo)}}
                    >
                        <TrashIcon className="h-8 w-8 text-gray-900"/>
                    </button>
                </div>
            </div>
        </>
    )

}