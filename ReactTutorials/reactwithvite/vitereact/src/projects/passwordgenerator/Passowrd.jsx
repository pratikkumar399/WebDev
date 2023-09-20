import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

const Passowrd = () => {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    const passwordgenerator = useCallback(() => {
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let specaialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let characterSet = '';
        let password = '';



        if (numbersAllowed) {
            characters += numbers;
        }
        if (charactersAllowed) {
            characters += specaialCharacters;
        }

        for (let i = 1; i <= length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length + 1);
            password += characters.charAt(randomIndex);
        }
        setPassword(password);
    }, [length, numbersAllowed, charactersAllowed]);


    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 8);
        window.navigator.clipboard.writeText(password);
    });

    useEffect(() => {
        passwordgenerator();
    }, [length, numbersAllowed, charactersAllowed, passwordgenerator]);

    return (
        <div className='flex justify-center  items-center h-screen' style={{ backgroundColor: 'black' }}>
            <div className=" justify-center  items-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  text-orange-500 bg-gray-700">
                <h1 className='text-white text-center my-2'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                        onClick={copyPasswordToClipboard}
                    >Copy</button>
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
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numbersAllowed}
                            id='numberInput'
                            className='cursor-pointer'
                            onChange={() => {
                                setNumbersAllowed(prev => !prev);
                            }}
                        />
                        <label htmlFor='numberInput' >Numbers </label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charactersAllowed}
                            id='characterInput'
                            className='cursor-pointer'
                            onChange={() => {
                                setCharactersAllowed(prev => !prev);
                            }}
                        />
                        <label htmlFor='characterInput'>Characters </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Passowrd
