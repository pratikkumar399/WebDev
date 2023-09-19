import React from 'react'
import { useState, useCallback } from 'react'

const Passowrd = () => {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordgenerator = useCallback(() => {
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let specaialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let characterSet = '';
        let password = '';

        if (numbersAllowed) {
            characterSet += numbers;
        }
        if (charactersAllowed) {
            characterSet += characters;
            characterSet += specaialCharacters;
        }

        for (let i = 1; i <= characterSet.length; i++) {
            let randomIndex = Math.floor(Math.random() * characterSet.length + 1);
            password = characterSet.charAt(randomIndex);
        }
        setPassword(password);
    }, [length, numbersAllowed, charactersAllowed, setPassword]);


    return (

        <div className="justify-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
            <h1 className='text-white text-center my-2'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text"
                    value={password}
                    className='outline-none w-full py-1 px-3'
                    placeholder='Password'
                    readOnly
                />
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <label>Length : {length}</label>
                </div>
            </div>
        </div>
    )
}

export default Passowrd
