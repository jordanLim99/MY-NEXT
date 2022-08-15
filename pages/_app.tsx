import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/layout"
import {useEffect, useState} from "react";


function MyApp({ Component, pageProps }: AppProps) {
    const [ isAuth , setIsAuth ] = useState(false);
    useEffect( () => {
        localStorage.getItem("login") === "true" && setIsAuth(true)
    } , [])


  return (
      <Layout isAuth={isAuth} onChange={(isLogIn : boolean)=>{setIsAuth(isLogIn)}} >
        <Component {...pageProps} isAuth={isAuth} onChange={(isLogIn : boolean)=>{setIsAuth(isLogIn)}}/>
      </Layout>
  )
}

export default MyApp
