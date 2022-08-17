import { auth , provider } from "../../firebase"
import {signInWithPopup, signOut} from "@firebase/auth";

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


    const REST_API_KEY = "1b9c10e5284a52df35c6a15893708dd2";
    const REDIRECT_URI =  "https://jordanlim.vercel.app/login/kakaoLogin";
    const LOGOUT_REDIRECT_URI = "https://jordanlim.vercel.app/login";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const signInWithKakao = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    const signOutWithKaKao = () => {
        fetch(`kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`,)
    }

    return (
        <>
            <div className="text-2xl text-center pt-12">
                { isLogIn  ?
                    <div className=" flex flex-col justify-center items-center gap-8 ">
                        <p>환영합니다 { localStorage.getItem("이름") ? localStorage.getItem("이름") : auth.currentUser?.displayName  }님 </p>
                        <button onClick={
                            localStorage.getItem("token" ) ?
                            signOutWithGoogle : signOutWithKaKao
                        }
                                className="p-4 bg-gray-100 rounded-md hover:bg-gray-300">로그아웃
                        </button>
                    </div>
                    :
                    <div className=" flex flex-col justify-center items-center gap-8 text-base">
                        <p>sign in to continue</p>
                        <a onClick={signInWithGoogle}>
                            <img
                                className="w-56"
                                src="/google_login.png"/>
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



