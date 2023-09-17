
import React, { useState } from 'react';


const TextVIsible = () => {
    const [isTextVisible, setTextVisible] = useState(true);

    const toggleTextVisibility = () => {
        setTextVisible(prevIsTextVisible => !prevIsTextVisible);
    };

    return (
        <>
            <div className='w-30 h-screen p-2 flex  flex-col  items-center justify-center'
                style={{ backgroundColor: isTextVisible ? 'lightblue' : 'lightgreen' }}
            >
                {isTextVisible ? (
                    <>

                        <button className='w-30 m-4 p-2  border border-sky-800 rounded' onClick={toggleTextVisibility}>Hide Text</button>
                        <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
                    </>
                ) : (
                    <button className='w-30 m-4 p-2  border border-sky-800 rounded' onClick={toggleTextVisibility}>Show Text</button>
                )}
            </div>

        </>
    )
}

export default TextVIsible
