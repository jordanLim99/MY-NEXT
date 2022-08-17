import {useEffect} from "react";
import {useRouter} from "next/router";



export default function KakaoLogin() {

    const PARAMS = new URL(document.location).searchParams;
    const KAKAO_CODE = PARAMS.get('code');
    const router = useRouter();
    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    const REDIRECT_URI =  "http://localhost:3000/login/kakaoLogin";
    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token` , {
            method : 'POST',
            headers : { 'Content-type' : 'application/x-www-form-urlencoded' },
            body : `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`
        })
            .then( res =>  res.json() )
            .then( data => {
                if (data.access_token) {
                    localStorage.setItem( 'token' , data.access_token )
                } else {
                    router.push("/login")
                }
            })
    }
    useEffect( () =>  { if(!KAKAO_CODE) { getKakaoToken(); }},[])

    return(
        <>
            kakaotoken
        </>
    )
}
