import Title from "../../components/title"
import AddTodo from "../../components/addTodo"
import Todo from "../../components/todo"
import { collection , query , onSnapshot , doc , updateDoc , deleteDoc } from "@firebase/firestore";
import { db } from "../../firebase"
import {useEffect, useState} from "react";

export default function ToDoList() {
    const [todos , setTodos ] = useState([]);
    useEffect(()=>{
        const q = query(collection( db ,"todos" ));
        const unsub = onSnapshot( q , (querySnapshot) => {
            let todosArray: any[] = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({...doc.data() , id : doc.id })
            });
            // @ts-ignore
            setTodos(todosArray)
        });

        return( () => unsub() )
    },[] )

    const handleEdit = async ( {todo , title } : any ) => {
        await updateDoc(doc(db, "todos" , todo.id ) , { title : title} );
    }
    const toggleComplete = async ( todo : any ) => {
        await updateDoc(doc(db, "todos" , todo.id ) , { complete : !todo.complete })
    }

    const handelDelete = async ( todo : any ) => {
        await deleteDoc(doc(db , "todos" , todo.id ))
        return(console.log(todo.id))
    }



    return(
        <>
            <div className="text-2xl flex flex-col gap-4 p-4 max-w-md mx-auto">
                <Title/>
                <AddTodo/>
            </div>
            <div>
                {todos.map( (todo : any ) =>(
                        <Todo
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            handleDelete={handelDelete}
                            handleEdit={handleEdit}
                        >
                        </Todo>

                ) )}
            </div>

        </>
    )
}