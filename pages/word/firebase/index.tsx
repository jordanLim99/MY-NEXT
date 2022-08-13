import {useEffect, useState} from "react";
import FireInput from "./input";


export default function FireBaseWord() {
    const dataBaseUrl = "https://my-next-project-fc255-default-rtdb.firebaseio.com"
    const [words, setWords] = useState([]);

    console.log(words);

    useEffect(() => {
        fetch(`${dataBaseUrl}/word.json`)
            .then(res => res.json())
            .then(res => setWords(res));
    } , [])



        return(
        <>
            <FireInput/>
            <div className="text-xl font-bold">
                <div className="flex flex-col justify-center items-center gap-4">
                    {words.map((word:any) => (
                        <div key={word.id} className="flex  gap-8 items-center justify-center p-2">
                            <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.day}일</p>
                            <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.eng}</p>
                            <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.kor}</p>
                            <button
                                    className="w-24 h-12 rounded-xl flex justify-center items-center text-sm">
                                    삭제
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </>

    )
}