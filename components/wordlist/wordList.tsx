import {TrashIcon} from "@heroicons/react/outline";
import {CheckCircleIcon} from "@heroicons/react/outline";
import {PencilAltIcon} from "@heroicons/react/solid";
import {useState} from "react";
import {DocumentReference, FieldPath} from "@firebase/firestore";

export default function WordList({ word , toggleComplete , handleDelete , handleEdit, } : any ) {
    const [ newWord , setNewWord ] = useState( word.title );

    const handleChange = (e : any) => {
        e.preventDefault();
        if (word.complete === true ) {
            setNewWord(word.title);
        } else {
            word.title = "";
            setNewWord(e.target.value);
        }
    }

    return(
        <>
            <div className="flex gap-4 text-2xl justify-center items-center my-4">
                <div className="flex flex-col gap-2">
                    <div>
                        <input
                            style={{ textDecoration : word.complete && "line-through "}}
                            type="text"
                            value={word.engTitle === "" ? newWord : word.engTitle }
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{ textDecoration : word.complete && "line-through "}}
                            type="text"
                            value={word.korTitle === "" ? newWord : word.korTitle }
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex gap-4 ">
                    <button
                        onClick={() => toggleComplete(word)}>
                        <CheckCircleIcon className="h-10 w-10 text-gray-900"/>
                    </button>

                    <button
                        onClick={()=>{handleEdit( word , newWord )}}
                    >
                        <PencilAltIcon className="h-10 w-10 text-gray-900"/>
                    </button>
                    <button
                        onClick={()=>{ handleDelete(word)}}
                    >
                        <TrashIcon className="h-10 w-10 text-gray-900"/>
                    </button>
                </div>
            </div>
        </>
    )

}