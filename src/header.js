import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {NavContext} from './App'

const Header = () => {
    const {theme,setTheme} = useContext(NavContext)

   const  changeTheme = () => {
        if (theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <div>
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={changeTheme}>Change Theme</button>  
        </div>
    )
}

export default Header

