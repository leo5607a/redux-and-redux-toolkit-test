import { useSelector } from "react-redux"
import Login from "./Login"
import NotLogin from "./NotLogin"

const Profile = () => {
    const state = useSelector(state => state.user)
    console.log(state)
    return(
        <>
            {state.profile.login ? <Login/> : <NotLogin/>}
        </>
    )
}

export default Profile