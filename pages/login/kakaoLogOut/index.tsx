import {useEffect, useState} from "react";
import {useRouter} from "next/router";
// import { db  } from "../../../firebase";
// import { setDoc , doc } from "@firebase/firestore";


export default function KakaoLogOut() {
    const router = useRouter();
    useEffect( () => {
        const token = localStorage.getItem("token")
        getKakaoToken(token);
    }, [])

    const getKakaoToken = (token : any) => {
        fetch(`https://kapi.kakao.com/v1/user/unlink` , {
            method : 'POST',
            headers : { 'Authorization' : `Bearer ${token}` },
        })
            .then( (res) => res.json() )
            .then( res => {
                const id = res.id
                router.push("/login")
                console.log(res )
            })
    }
    return(
        <>
            <p className="text-center text-2xl">회원 탈퇴 중입니다..</p>
        </>
    )
}
//