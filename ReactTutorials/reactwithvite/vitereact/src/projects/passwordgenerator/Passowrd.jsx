import React from 'react'
import { useState } from 'react'

const Passowrd = () => {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordgenerator = () => {
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let characterSet = '';
        let password = '';

        if (numbersAllowed) {
            characterSet += numbers;
        }
        if (charactersAllowed) {
            characterSet += characters;
        }

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }
        setPassword(password);
    };


    return (
        <div className='h-screen' style={{ backgroundColor: "black" }}>
            <h1 className='text-4xl text-center text-white'>Password</h1>
        </div>
    )
}

export default Passowrd
