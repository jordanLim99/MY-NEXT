import {useEffect, useState} from "react";
import {useRouter} from "next/router";
// import { db } from "../../../firebase";
// import { collection , addDoc } from "@firebase/firestore";


export default function KakaoLogin() {
    // const [kakaoData, setKakaoData ] = useState([]);
    // useEffect(() => {
    //     const q = query(collection(db, "kakaoData"));
    //     const unsub = onSnapshot( q, (querySnapshot) => {
    //         let kakaoArray: any[] = [];
    //         querySnapshot.forEach((doc) => {
    //             kakaoArray.push({...doc.data(), id: doc.id})
    //         });
    //         // @ts-ignore
    //         setKakaoData(kakaoArray)
    //     });
    //     return (() => unsub())
    // }, []);

    // const [nickname , setNickname ] = useState("")
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
                'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
            .then( res => res.json() )
            // .then( (res) => {
                // setNickname(res.kakao_account.profile.nickname)
                // setId(res.kakao_account.id)
                // res.kakao_account.profile_image_needs_agreement === false ? setProfileImg(res.kakao_account.profile.profile_image_url) : setProfileImg("")
                // res.kakao_account.email_needs_agreement === false ? setEmail(res.kakao_account.email.email) : setEmail("")
                // res.kakao_account.gender_needs_agreement === false ? setGender(res.kakao_account.gender) : setGender("")
                // res.kakao_account.birthday_needs_agreement === false ? setBirthday(`${res.kakao_account.birthday.birthyear}.${res.kakao_account.birthday.birthday} `) : setBirthday("")
                // res.kakao_account.age_range_needs_agreement === false ? setAge(res.kakao_account.age_range) : setAge("")
            // })
            .then( (res) => localStorage.setItem("이름" , res.kakao_account.profile.nickname ))
            .then( () => {localStorage.setItem("login" , String(true) )} )
            // .then( () => firebasePush )
            .then( () => { router.push("/")} )
    }

    // const [id , setId ] = useState("")
    // const [email , setEmail ] = useState("")
    // const [gender , setGender ] = useState("")
    // const [age , setAge ] = useState("")
    // const [birthday , setBirthday ] = useState("")
    // const [profileImg , setProfileImg ] = useState("")


    // const firebasePush =  async () => {
    //         console.log("id,email,gender,age,birthday,profileImg,nickname" + id,email,gender,age,birthday,profileImg,nickname)
    //     await addDoc(collection(db,"kakaoData"), {
    //         id,
    //         nickname,
    //         profileImg,
    //         email,
    //         gender,
    //         age,
    //         birthday,
    //     });
    // }


    return(
        <>
            <p className="text-center text-2xl">로그인중입니다..</p>
        </>
    )
}
