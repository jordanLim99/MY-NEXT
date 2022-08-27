import { auth , provider } from "../../firebase"
import {signInWithPopup, signOut} from "@firebase/auth";
import {useRouter} from "next/router";
import Link from "next/link";
import {useEffect, useState} from "react";
import { db  } from "../../firebase";
import { setDoc , doc } from "@firebase/firestore";


export default function Login ( props : any) {
    const router = useRouter();
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


    // const signOutWithGoogle = () => {
    //     signOut( auth )
    //         .then( () => {
    //             localStorage.setItem("login" , "false" )
    //             props.onChange(false)
    //         })
    //         .then( () => { console.log( "localStorage login" + localStorage.getItem("login"))})
    //         .then( () => {router.push("/")})
    //
    // }

    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    // const REDIRECT_URI =  "https://jordanlim.vercel.app/login/kakaoLogin";
    // const LOGOUT_REDIRECT_URI = "https://jordanlim.vercel.app/login";
    const REDIRECT_URI =  "http://localhost:3000/login/kakaoLogin";
    const LOGOUT_REDIRECT_URI = "http://localhost:3000/login";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


    const signInWithKakao = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    const signOutWithKaKao = async () => {
        await setDoc(doc(db,"kakaoData" , `${localStorage.getItem("id")}` ), {login : false})
        await fetch(`kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`)
        await localStorage.removeItem("이름")
        console.log("get rid of localstorage Item 이름")
        await localStorage.removeItem("id")
        await localStorage.removeItem("token")
        await localStorage.setItem("login" , String(false))
        await router.push("/")
    }


    return (
        <>
            <div className="text-2xl text-center pt-12">
                {isLogIn ?
                    <div className="flex flex-col justify-center items-start gap-4 max-w-sm mx-auto">
                        <p className="text-left pl-5">환영합니다 {localStorage.getItem("이름") ? localStorage.getItem("이름") : auth.currentUser?.displayName}님 </p>
                        <Link href={"/login/myInfo"}>
                            <button className="w-full bg-gray-100 rounded-md text-left p-5">
                                내정보
                            </button>
                        </Link>
                        <button onClick={signOutWithKaKao} className="w-full bg-gray-100 rounded-md text-left p-5">
                            로그아웃
                            {/*localStorage.getItem("token") ? signOutWithGoogle :*/}
                        </button>
                    </div>
                    :
                    <div className=" flex flex-col justify-center items-center gap-8 text-base mx-auto max-w-sm">
                        <p>sign in to continue</p>
                        <button className="flex items-center shadow-gray-100 shadow-2xl bottom-0 gap-2 ring-1 ring-gray-400 p-4 w-full text-center font-bold items-center justify-center rounded-xl"
                                onClick={signInWithGoogle}
                        >
                            <img
                                className="w-4 h-4"
                                src={"/google.png"}
                            />
                            구글로 로그인
                        </button>
                        <button
                            className="flex items-center shadow-gray-100 shadow-2xl bottom-0 gap-2 bg-yellow-300 p-4 w-full text-center font-bold items-center justify-center rounded-xl"
                            onClick={signInWithKakao}>
                            <img
                                className="w-4 h-4"
                                src={"/kakao.svg"}
                            />
                            카카오톡으로 로그인
                        </button>
                    </div>

                }
            </div>
        </>
    );
}



