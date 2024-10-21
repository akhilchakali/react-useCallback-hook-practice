import { useNavigate } from "react-router-dom"

const Login = () => {

const navigate = useNavigate()

const signin = () => {
    navigate('/home')
}

    return(
        <div>
                <button onClick={signin}>Login</button>
        </div>
        
    )
}

export default Login