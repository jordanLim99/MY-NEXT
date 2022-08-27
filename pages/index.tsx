import type { NextPage } from 'next'

const Home: NextPage = () => {


  return (
      <div className="text-gray-600 body-font">
        <div className="py-12 mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MY NEXT-JS
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed">
              NEXT JS 연습장
              <br/>
              8/10 ~ next.js, prisma 공부
              <br/>
              8/12 ~ 단어장 만들기 로컬에서 불러오기
              <br/>
              8/13 ~ todolist 만들기 firebase cloud storage 에서 불러오기
              <br/>
              8/15 ~ 단어장 firebase firestore 로 변경
              <br/>
              8/15 ~ google 로그인 구현 및 todolist 닉네임 표시기능
              <br/>
              8/16 ~ kakao 로그인 구현
              <br/>
              8/18 kakao 로그인 완료
              <br/>
              8/18 ~ my page 구현
            </p>
          </div>
        </div>
      </div>
  )
}

export default Home
