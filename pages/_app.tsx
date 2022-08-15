import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/layout"
import {useState} from "react";


function MyApp({ Component, pageProps }: AppProps) {
    const [ isAuth , setIsAuth ] = useState(false);
  return (
      <Layout isAuth={isAuth} onChange={(boolean : boolean)=>{setIsAuth(boolean)}} >
        <Component {...pageProps} isAuth={isAuth} onChange={(boolean : boolean)=>{setIsAuth(boolean)}}/>
      </Layout>
  )
}

export default MyApp
