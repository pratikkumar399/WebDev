import { useContext, useState } from 'react'
import userContext from '../userContext/UserContext';

const Login = () => {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setUser({ userName, password });

    };

    return (
        <>
            <h2>Login</h2>
            <input
                type='text'
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder='username'
            />
            {" "}
            <input
                type='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder='password'
            />
            {" "}
            <button onClick={handleSubmit} >Submit</button>
        </>
    )
}

export default Login
