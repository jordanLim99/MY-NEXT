import {TrashIcon} from "@heroicons/react/outline";
import {CheckCircleIcon} from "@heroicons/react/outline";
import {PencilAltIcon} from "@heroicons/react/solid";
import {useState} from "react";

export default function WordList({ word , toggleComplete , handleDelete , handleEdit, } : any ) {
    const [ newWord , setNewWord ] = useState( word.title );


    const handleChange = (e : any) => {
        e.preventDefault();
        if (word.complete === true ) {
            setNewWord(word.title);
        } else {
            setNewWord(e.target.value);
        }
    }

    return(
        <>
            <div className="flex flex-col gap-4 text-2xl justify-center my-4 bg-gray-100 rounded-md p-4 w-fit mx-auto my-2">
                <div className="flex flex-col gap-2 w-96">
                    <div>
                        <input
                            style={{ textDecoration : word.complete && "line-through "}}
                            type="text"
                            value={word.engTitle === "" ? newWord : word.engTitle }
                            onChange={handleChange}
                            className="w-full rounded-md"
                        />
                    </div>
                    <div>
                        <input
                            style={{ textDecoration : word.complete && "line-through "}}
                            type="text"
                            value={word.korTitle === "" ? newWord : word.korTitle }
                            onChange={handleChange}
                            className="w-full rounded-md"
                        />
                    </div>
                </div>
                <div className="flex gap-4 justify-end">
                    <button
                        onClick={() => toggleComplete(word)}>
                        <CheckCircleIcon className="h-10 w-10 text-gray-900"/>
                    </button>
                    <button
                        onClick={()=>{handleEdit( word.id , newWord )}}>
                        <PencilAltIcon className="h-10 w-10 text-gray-900"/>
                    </button>
                    <button
                        onClick={()=>{ handleDelete(word)}}>
                        <TrashIcon className="h-10 w-10 text-gray-900"/>
                    </button>
                </div>
            </div>
        </>
    )

}