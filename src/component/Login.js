import { useDispatch, useSelector } from "react-redux"
import { setLogout } from "../store/userSlice"

const Login = () => {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handlelogout = () => {
        dispatch(setLogout())
    }
    return(
        <>
            <p>Name:{state.profile.name}</p>
            <p>Age:{state.profile.age}</p>
            <p>Email:{state.profile.email}</p>
            <button onClick={handlelogout}>Logout</button>
        </>
    )
}

export default Login