import {useEffect} from "react";

export default function KakaoAuthorize() {

    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    // const REDIRECT_URI =  "http://localhost:3000/login";
    const REDIRECT_URI =  "https://jordanlim.vercel.app/login";

    useEffect( () => {
        // const token = localStorage.getItem("token")
        KakaoAuthorizing();
    }, [])

    const KakaoAuthorizing = () => {
        fetch(`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope={required_scopes.join(',')}` , {
            method : 'GET',
        })
            .then( (res) => res.json() )
            .then( res => {
                const id = res.id
                console.log(id)
            })
    }


    return(<></>)
}