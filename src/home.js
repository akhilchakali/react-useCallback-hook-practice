import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const Logout = () => {
        navigate('/')
    }
    return(
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}
export default Home