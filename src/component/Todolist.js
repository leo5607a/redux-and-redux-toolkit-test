import { useReducer, useState } from "react"
import Todo from "./Todo"

const reducer = (todos, action) => {
    console.log(todos, action.payload)
    const {todoContent, id} = action.payload
    switch(action.type){
        case "ADD":
            return [
                ...todos, 
                newtodo(todoContent)
            ]
        case "TOGGLE":
            return todos.map((todo)=>{
                if(todo.id === id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case "DELETE":
            return todos.filter((todo) => todo.id !== id)
        default:
            return todos
    }
}

const newtodo = (todoContent) => {
    return {
        id: Math.floor(Math.random()*100000),
        todoContent,
        complete:false
    }
}

const Todolist = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [todoContent, settodoContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: { todoContent: todoContent}
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={todoContent}
                    onChange={(e) => {settodoContent(e.target.value)}}
                    placeholder="Type in something ..."
                />
            </form>

            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    )
}

export default Todolist