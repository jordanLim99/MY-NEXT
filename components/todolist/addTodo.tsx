import {useEffect, useState} from "react";
import { db , auth } from "../../firebase";
import {collection, addDoc} from "firebase/firestore"


export default function AddTodo() {
    const [title , setTitle ] = useState("");
    let date = Date.now();
    const [userName , setUserName ] = useState("")


    useEffect(()=>{
        if (auth.currentUser?.displayName) {
            setUserName(auth.currentUser?.displayName)
        } else {
            const kakaoUserName = JSON.stringify(localStorage.getItem("이름")).substring(1 , 4)
            setUserName(kakaoUserName)
        }
    } ,[])


    const handleSubmit = async (e : any) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db,"todos"), {
                title,
                user : userName ,
                date : date,
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