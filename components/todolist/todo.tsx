import {TrashIcon} from "@heroicons/react/outline";
import {CheckCircleIcon} from "@heroicons/react/outline";
import {PencilAltIcon} from "@heroicons/react/solid";
import {useState} from "react";
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "../../firebase";

export default function Todo( { todo , toggleComplete , handleDelete  } : any ) {
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

    const handleEdit = async () => {
        await updateDoc(doc(db, "todos" , todo.id ) , { title : `${newTitle}`} );
        await updateDoc(doc(db, "todos" , todo.id ) , {isTitleEdit : true})
    }




    return(
        <>
            <div className="flex flex-col gap-2 text-2xl justify-center bg-gray-100 rounded-md p-4 w-fit mx-auto my-2">
                <div className="flex ">
                    <div className="text-md flex items-center">
                        {todo.user !== null ? <p className="text-md">{todo.user} </p> : <></>}
                    </div>
                    <div className="flex text-sm ml-auto items-end text-gray-500">
                        {todo.isTitleEdit && <>
                            <p >수정됨 {todo.date}</p>
                        </>}
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
                            onClick={()=> handleEdit()}
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