import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { db  } from "../../../firebase";
import { collection , addDoc , setDoc , doc} from "@firebase/firestore";


export default function KakaoLogin() {


    const router = useRouter();
    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    const REDIRECT_URI =  "https://jordanlim.vercel.app/login/kakaoLogin";
        useEffect( () => {
            const newLocation = document.location
            // console.log(newLocation)

            const PARAMS = new URL(`${newLocation}`).searchParams;
            const KAKAO_CODE = PARAMS.get('code');
            // console.log("KAKAO_CODE : " , KAKAO_CODE )

            getKakaoToken(KAKAO_CODE);
            console.log("getKakaoToken...")


        }, [])

    const getKakaoToken = (KAKAO_CODE : any) => {
        fetch(`https://kauth.kakao.com/oauth/token` , {
            method : 'POST',
            headers : { 'Content-type' : 'application/x-www-form-urlencoded' },
            body : `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`
        })
            .then( (res) => res.json() )
            .then( data => {
                if (data.access_token) {
                    localStorage.setItem( 'token' , data.access_token )
                    getUserInfo(data.access_token)
                    console.log("getUserInfo...")
                }
                else { router.push("/login") }
            })
    }


    const getUserInfo = (token : any) => {
        fetch(`https://kapi.kakao.com/v2/user/me` , {
            method : "GET",
            headers : {
                'Authorization' : `Bearer ${token}` ,
                'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
            },
        })
            .then( res => res.json() )
            .then( async (res) => {
                const nickname = res.kakao_account.profile.nickname
                const kakaoId = res.id
                localStorage.setItem("이름" , nickname )
                localStorage.setItem("id" , kakaoId )
                localStorage.setItem("login" , true )
                // id 가 로그인 한 아이디와 같지 않다면 add Doc

                await addDoc(collection(db,`kakaoData` ), {
                    name : nickname,
                    // id : kakaoId ,
                    date : res.connected_at,
                });
            })
            .then( () => { router.push("/")} )
    }


    return(
        <>
            <p className="text-center text-2xl">로그인중입니다..</p>
        </>
    )
}
//