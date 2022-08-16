import {TrashIcon} from "@heroicons/react/outline";
import {CheckCircleIcon} from "@heroicons/react/outline";
import {PencilAltIcon} from "@heroicons/react/solid";
import {useState} from "react";

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
            <div className="flex flex-col gap-2 text-2xl justify-center bg-gray-100 rounded-md p-4 w-fit mx-auto my-2">

                <div className="flex ">
                    <div className="text-md flex items-center">
                        {todo.user !== null ? <p className="text-md">{todo.user} </p> : <></>}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div>
                    <textarea
                        style={{ textDecoration : todo.complete && "line-through " , width : 250 , height : 80 , resize : "none" }}
                        value={todo.title === "" ? newTitle : todo.title }
                        onChange={handleChange}
                        className="rounded-md"
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => toggleComplete(todo)}>
                            <CheckCircleIcon className="h-8 w-8 text-gray-900"/>
                        </button>

                        <button
                            onClick={()=> handleEdit( todo , newTitle )}
                        >
                            <PencilAltIcon className="h-8 w-8 text-gray-900 "/>
                        </button>
                        <button
                            onClick={()=>{ handleDelete(todo)}}
                        >
                            <TrashIcon className="h-8 w-8 text-gray-900"/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )

}