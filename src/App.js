import { createContext,  useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './header'
import Home from './home'
import About from './about'
export const NavContext = createContext(null)

const App = () => {
    const [theme,setTheme] = useState('light')
    const backgroundColor = theme === 'light' ? '#f0f0f0' : '#333';
    return (
        <NavContext.Provider value={{theme , setTheme}}>
            <div style={{ backgroundColor: backgroundColor}}>
            <BrowserRouter >
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
            </Routes>
            </BrowserRouter>
            </div>
        </NavContext.Provider>
    )
}

export default App