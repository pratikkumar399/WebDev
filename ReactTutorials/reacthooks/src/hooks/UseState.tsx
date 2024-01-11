import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1> UseState Demo</h1>

            <button onClick={() => setCount(count + 1)} style={{ height: '50px', width: '100px', color: "white" }} >Count </button>
            <p>Counter {count}</p>
        </div>
    )
}
export default UseState
