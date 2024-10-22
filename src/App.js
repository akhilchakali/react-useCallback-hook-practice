import {useState, useCallback} from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const increase =useCallback(()=>{
        setCount(count+1)
    },[count])

    const decrease =useCallback(()=>{
        setCount(count-1)
    },[count])

    const addIncrement =useCallback(()=>{
        setCount1(count1+1)
    },[count1])

    return(
        <div>
            <p>{count}</p>
            <p>{count1}</p>
           <button onClick={increase}>+</button>
           <button onClick={decrease}>-</button>
           <button onClick={addIncrement}>AddIncrement</button>
        </div>
    )
}

export default App