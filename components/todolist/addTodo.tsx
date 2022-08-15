import {useState} from "react";
import { db } from "../../firebase";
import { collection , addDoc } from "firebase/firestore"

export default function AddTodo() {
    const [title , setTitle ] = useState("");
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db,"todos"), {
                title,
                completed : false,
            });
            setTitle("");
        }
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