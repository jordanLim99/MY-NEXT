import { signup } from "../../firebase";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";



export default function Login() {
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const onSubmit = async (e : any) => {
        e.preventDefault();
    }
    async function handelSignUp () {
        await signup( email , password )
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>회원가입</div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={ (e:any) => { setEmail(e.target.value) } }
                        placeholder=" Email"/>
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={ (e:any) => { setPassword(e.target.value) } }
                        placeholder=" Password"/>
                </div>
                <div>
                    <button type="submit" onClick={handelSignUp}>회원가입 하기</button>
                </div>

            </form>

        </>
    )
}

