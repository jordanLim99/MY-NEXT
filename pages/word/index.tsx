import { PrismaClient } from '@prisma/client'
import List from "./list"
import Input from "./input"

export default function word( {words} : any ) {

    return(
        <div className="flex flex-col gap-4 text-2xl w-full text-center">
            <Input/>
            <List/>

            {/*<div>
                {words.map((words : any ) => (
                        <div key={words.id} className="flex flex-col">
                            <div>DAY : {words.day}</div>
                            <div>ENGLISH : {words.eng}</div>
                            <div>KOREAN : {words.kor}</div>
                        </div>
                    )
                )}
            </div>*/}
        </div>
    )
}

/*

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api")
    const words = await res.json()
    return {
        props : { words }
    }
}
*/
