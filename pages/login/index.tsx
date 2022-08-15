import { auth , provider } from "../../firebase"
import {signInWithPopup, signOut} from "@firebase/auth";
import {useState} from "react";


export default function Login ( props : any) {
    let isLogIn = props.isAuth
    const signInWithGoogle = () => {
        signInWithPopup( auth, provider )
            .then( () => {
                localStorage.setItem( "login" , "true" )
                props.onChange(true)
                console.log(auth.currentUser?.displayName)})
            .then(()=>{
            console.log( "localStorage login" + localStorage.getItem("login" ));
            })
    }


    const signOutWithGoogle = () => {
        signOut( auth )
            .then( () => {
                localStorage.setItem("login" , "false" )
                props.onChange(false)
            })
            .then( () => { console.log( "localStorage login" + localStorage.getItem("login"))})
    }

    return (
        <>
            <div className="text-2xl text-center pt-12">
                { isLogIn  ?
                    <div className=" flex flex-col justify-center items-center gap-8 ">
                        <p>환영합니다 {auth.currentUser?.displayName}님 </p>
                        <button onClick={signOutWithGoogle}
                                className="p-4 bg-gray-100 rounded-md hover:bg-gray-300">로그아웃
                        </button>
                    </div>
                    :
                    <div className=" flex flex-col justify-center items-center gap-8 ">
                        <p>sign in with google to continue</p>
                        <button onClick={signInWithGoogle} className="p-4 bg-gray-100 rounded-md hover:bg-gray-300">구글로 로그인 하기
                        </button>
                    </div>
                }
            </div>
        </>
    );
}


