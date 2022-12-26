import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setLogin } from "../store/userSlice"
const NotLogin = () => {
    const dispatch = useDispatch()
    const nameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const handlelogin = () => {
        const nameValue = nameRef.current.value
        const ageValue = ageRef.current.value
        const emailValue = emailRef.current.value
        dispatch(setLogin({
            name: nameValue,
            age: ageValue,
            email: emailValue,
        }))
    }

    return(
        <>
            <label htmlFor="name">Name:</label>
            <input type="text" plasenolder="name" name="name" id="name" ref={nameRef}/>
            <br/>
            <label htmlFor="age">Age:</label>
            <input type="text" plasenolder="age" name="age" id="age" ref={ageRef}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="text" plasenolder="email" name="email" id="email" ref={emailRef}/>
            <br/>
            <button onClick={handlelogin}>Login</button>
        </>
    )
}

export default NotLogin