import type { NextPage } from 'next'
import Spline from '@splinetool/react-spline';


const Home: NextPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MY NEXT-JS
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed">
              NEXT JS 연습장
              <br/>
              8/10 ~ next.js, prisma 공부
              <br/>
              8/12 ~ 단어장 만들기 로컬에서 불러오기
            </p>
          </div>
          <div className= "max-h-96">
            <Spline scene="https://prod.spline.design/aT4-O51l60YSoduh/scene.splinecode"
                    className="object-contain"/>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home
