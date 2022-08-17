import { db } from "../../firebase";
import { collection , addDoc } from "@firebase/firestore";
import {useEffect} from "react";

export default function Date() {
    useEffect(()=>{ putId() },[])
    const id = 123

    const putId = async () => {
        await addDoc(collection(db, "ids"), {
            id,
            complete: false,
        }).then(()=>{console.log("putID")})
    };



    return(

        <>
        <div>123</div>
        </>
    )

}