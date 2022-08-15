import {useState} from "react";
import { db } from "../../firebase";
import { collection , addDoc } from "firebase/firestore"

export default function AddWord() {
    const [engTitle , setEngTitle ] = useState("");
    const [korTitle , setKorTitle ] = useState("");
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        if (engTitle && korTitle !== "") {
            await addDoc(collection(db,"words"), {
                engTitle,
                korTitle,
                complete : false,
            });
            setEngTitle("");
            setKorTitle("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 justify-center items-center">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div>
                            <input
                                type="text"
                                placeholder=" Enter Eng.."
                                value={engTitle}
                                onChange={(e: any) => {
                                    setEngTitle(e.target.value)
                                }}
                                className="rounded-md"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder=" Enter kor.."
                                value={korTitle}
                                onChange={(e: any) => {
                                    setKorTitle(e.target.value)
                                }}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="bg-gray-100 rounded-md p-4">Add</button>
                    </div>
                </div>
            </form>


        </>
    );
}