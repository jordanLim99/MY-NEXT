import {useEffect, useState} from "react";

export default function List() {
    const [words, setWords] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:3000/api`).then(res => res.json())
            .then(res => setWords(res));
        return console.log(words);
    } , [])
/*

    const Del =  async function ( ) {
        fetch(`http://localhost:3000/api` , {
            method : "DELETE",
        }).then(()=>{console.log("delete success")})
    }
*/

    return (
        <div className="text-xl font-bold">
            <div className="flex flex-col justify-center items-center gap-4">
                {words.map((word:any) => (
                    <div key={word.id} className="flex  gap-8 items-center justify-center p-2">
                        <p className="w-24 h-12 rounded-xl flex justify-center items-center">id : {word.id}</p>
                        <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.day}일</p>
                        <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.eng}</p>
                        <p className="w-24 h-12 rounded-xl flex justify-center items-center">{word.kor}</p>
                        <button className="w-24 h-12 rounded-xl flex justify-center items-center text-sm">삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

