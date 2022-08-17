import {useEffect} from "react";
import {useRouter} from "next/router";



export default function KakaoLogin() {
    const router = useRouter();
    useEffect( () => {
        const newLocation = document.location
        console.log(newLocation)
        const PARAMS = new URL(`${newLocation}`).searchParams;
        const KAKAO_CODE = PARAMS.get('code');
        console.log(KAKAO_CODE)


        if(!KAKAO_CODE) { getKakaoToken({KAKAO_CODE} ) }
    }, [])

    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    const REDIRECT_URI =  "http://localhost:3000/login/kakaoLogin";
    const getKakaoToken = ( code : any ) => {
        fetch(`https://kauth.kakao.com/oauth/token` , {
            method : 'POST',
            headers : { 'Content-type' : 'application/x-www-form-urlencoded' },
            body : `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`
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

    return(
        <>
            <p>kakaotoken</p>
        </>
    )
}
