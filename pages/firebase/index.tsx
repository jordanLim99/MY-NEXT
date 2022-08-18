import {useEffect, useState} from "react";
import { db , auth } from "../../firebase";
import {collection, addDoc , doc , setDoc} from "firebase/firestore"


export default function Firebase() {
    const [title , setTitle ] = useState("");
    let date = Date.now();
    const handleSubmit = async (e : any) => {
        e.preventDefault();
            await setDoc(doc(db,"firestore" , "id"), {
                title : "firestore",
                user : "name" ,
                date : date,
            });
            setTitle("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-8 justify-center items-center">
                    <div>
                        <input
                            type="text"
                            placeholder=" Enter todo.."
                            value={title}
                            onChange={ (e:any) => { setTitle(e.target.value) } }
                            className="rounded-md"
                        />
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </form>


        </>
    )
}