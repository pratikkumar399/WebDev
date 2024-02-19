import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Hooks Demo</h1>
            <h3>Quick Tip : React only shows the updates in the values if the ui is rerendered somehow</h3>
            <ul>
                <li>
                    <Link to="/usestate">useState</Link>
                </li>
                <li>
                    <Link to="/useeffect">useEffect</Link>
                </li>
                <li>
                    <Link to="/usecallback">useCallBack</Link>
                </li>
                <li>
                    <Link to="/useref">useRef</Link>
                </li>
            </ul>

        </div>
    )
}

export default Home
