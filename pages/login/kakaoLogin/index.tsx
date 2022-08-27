import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { db  } from "../../../firebase";
import { collection , addDoc , setDoc , doc } from "@firebase/firestore";


export default function KakaoLogin() {


    const router = useRouter();
    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";

    const REDIRECT_URI =  "http://localhost:3000/login/kakaoLogin";
    // const REDIRECT_URI =  "https://jordanlim.vercel.app/login/kakaoLogin";

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
                const connectedAt = res.connected_at
                const ageRange = res.kakao_account.age_range_needs_agreement === true ? null : res.kakao_account.age_range
                const birthday = res.kakao_account.birthday_needs_agreement === true ? null : res.kakao_account.birthday
                const email = res.kakao_account.email_needs_agreement === true ? null : res.kakao_account.email
                const gender = res.kakao_account.gender_needs_agreement === true ? null : res.kakao_account.gender
                const image = res.kakao_account.profile.is_default_image === true ? null : res.kakao_account.profile.profile_image_url

                localStorage.setItem("이름" , nickname )
                localStorage.setItem("id" , kakaoId )
                localStorage.setItem("login" , String(true) )
                console.log(res)
                await setDoc(doc(db,"kakaoData" , `${kakaoId}` ), {
                    login : true,
                    name : nickname,
                    date : connectedAt,
                    ageRange : ageRange,
                    birthday : birthday,
                    email : email,
                    gender : gender,
                    image : image
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
