import {useEffect, useState} from "react";
export default function Input( ) {
    const [engVal , setEngVal] = useState("")
    const onEngChange = (e : any) => {
        setEngVal(e.target.value);
    }
    const [korVal , setKorVal] = useState("")
    const onKorChange = ( e : any ) => {
        setKorVal(e.target.value)
    }
    const [dateVal , setDateVal] = useState(1)
    const onDateChange = ( e : any ) => {
        setDateVal(e.target.value)
    }
    function onSubmitHandler(e : any) {
        e.preventDefault();
        fetch(`http://localhost:3000/api`,{
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                eng : engVal,
                kor : korVal,
                day : parseInt(String(dateVal)),
                isDone : false
            }),
        }).then( res => res.json()).then(res => console.log("ok"))
    }


    return(
        <>
            <form onSubmit={onSubmitHandler} className="text-gray-600 flex justify-center items-center my-8  px-4 max-w-lg mx-auto">
                <div className="text-xl font-bold flex flex-col gap-4 sm:flex-row ">
                    <div className="flex flex-col sm:flex-row justify-center items-center  text-center gap-4 ">
                        <input type={"text"} name={"eng"} placeholder={"  ENGLISH"} className="ring-1 ring-blue-300 rounded-sm" value={engVal} onChange={onEngChange}/>
                        <input type={"text"} name={"kor"} placeholder={"  KOREAN"} className="ring-1 ring-blue-300 rounded-sm"  value={korVal} onChange={onKorChange}/>
                    </div>
                    <div className="flex justify-center items-center py-2 text-center gap-2 ">
                        <select  name={"date"} className="ring-1 ring-blue-300 rounded-sm" value={dateVal} onChange={onDateChange}>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select>
                            <button className="w-20 hover:bg-gray-100" type={"submit"} value="Submit">
                                저장
                            </button>
                    </div>
                </div>
            </form>
        </>
    )
}