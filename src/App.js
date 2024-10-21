import {useRef, useEffect} from 'react'

const App = ( ) => {
    const data = useRef(null)

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(data.current.value)
        data.current.value=""
        console.log(data.current.value)
    }
    useEffect(()=>{
        data.current.focus()
    },[])

    return(
        <div>
            <center>
            <form onSubmit={submitHandler}>
                <input ref={data} type="text" placeholder="Enter Your Name"/>
                <br/>
                <input type="submit"/>
            </form>
            </center>
        </div>
    )

}
export default App