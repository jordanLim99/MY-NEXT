import Title from "../../components/wordlist/title"
import AddWord from "../../components/wordlist/addWord"
import WordList from "../../components/wordlist/wordList"
import { collection , query , onSnapshot , doc , updateDoc , deleteDoc } from "@firebase/firestore";
import { db } from "../../firebase"
import {useEffect, useState} from "react";

export default function Word() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "words"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let wordsArray: any[] = [];
            querySnapshot.forEach((doc) => {
                wordsArray.push({...doc.data(), id: doc.id})
            });
            // @ts-ignore
            setWords(wordsArray)
        });

        return (() => unsub())
    }, []);

    const handleEdit = async ( { id , title } : any ) => {
        await updateDoc(doc(db, "words" , id ) , { title : title} );
    }
    const toggleComplete = async ( word : any ) => {
        await updateDoc(doc(db, "words" , word.id ) , { complete : !word.complete })
    }

    const handelDelete = async ( word : any ) => {
        await deleteDoc(doc(db , "words" , word.id ))
        return(console.log(word.id))
    }



    return(
        <>
            <div className="text-2xl flex flex-col gap-4 p-4 max-w-md mx-auto">
                <Title/>
                <AddWord/>
            </div>
            <div >
                {words.map( (word : any ) =>(
                    <WordList
                        key={word.id}
                        word={word}
                        toggleComplete={toggleComplete}
                        handleDelete={handelDelete}
                        handleEdit={handleEdit}
                    >
                    </WordList>

                ) )}
            </div>

        </>
    )
}