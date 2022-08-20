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


    const signOutWithGoogle = () => {
        signOut( auth )
            .then( () => {
                localStorage.setItem("login" , "false" )
                props.onChange(false)
            })
            .then( () => { console.log( "localStorage login" + localStorage.getItem("login"))})
            .then( () => {router.push("/")})

    }

    const REDIRECT_URI =  "https://jordanlim.vercel.app/login/kakaoLogin";
    const LOGOUT_REDIRECT_URI = "https://jordanlim.vercel.app/login";
    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    // const REDIRECT_URI =  "http://localhost:3000/login/kakaoLogin";
    // const LOGOUT_REDIRECT_URI = "http://localhost:3000/login";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


    const signInWithKakao = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    const signOutWithKaKao = async () => {
        await setDoc(doc(db,"kakaoData" , `${localStorage.getItem("id")}` ), {login : false})
        await fetch(`kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`)
        await localStorage.removeItem("이름")
        await localStorage.removeItem("id")
        await localStorage.removeItem("token")
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
                        <button onClick={localStorage.getItem("token") ? signOutWithGoogle : signOutWithKaKao} className="w-full bg-gray-100 rounded-md text-left p-5">
                            로그아웃
                        </button>
                    </div>
                    :
                    <div className=" flex flex-col justify-center items-center gap-8 text-base max-w-sm">
                        <p>sign in to continue</p>
                        <a onClick={signInWithGoogle}>
                            <img className="w-56" src="/google_login.png"/>
                        </a>
                        <a onClick={signInWithKakao}>
                            <img
                                src="/kakao_login.png"
                                className="w-56"
                                alt="카카오 로그인 버튼"
                            />
                        </a>
                    </div>
                }
            </div>
        </>
    );
}



