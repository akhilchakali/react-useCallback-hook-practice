import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Login from './login'
import Home from './home'

const App = () => {
    return(
        <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        </div> 
    )
}
export default App