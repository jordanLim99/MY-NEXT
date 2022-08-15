import Title from "../../components/todolist/title"
import AddTodo from "../../components/todolist/addTodo"
import Todo from "../../components/todolist/todo"
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc, orderBy} from "@firebase/firestore";
import { db } from "../../firebase"
import {useEffect, useState} from "react";

export default function ToDoList() {
    const [todos , setTodos ] = useState([]);
    useEffect(()=>{
        const q = query(collection( db ,"todos" ) , orderBy('date' , "asc"));
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

    const handleEdit = async ( { todo , title } : any ) => {
        await updateDoc(doc(db, "todos" , todo.id ) , { title : title} );
    }
    const toggleComplete = async ( todo : any ) => {
        await updateDoc(doc(db, "todos" , todo.id ) , { complete : !todo.complete })
    }

    const handelDelete = async ( todo : any ) => {
        await deleteDoc(doc(db , "todos" , todo.id ))
    }



    return(
        <>
            <div className="text-2xl flex flex-col gap-4 p-4 max-w-md mx-auto">
                <Title/>
                <AddTodo/>
            </div>
            <div className="mb-20">
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