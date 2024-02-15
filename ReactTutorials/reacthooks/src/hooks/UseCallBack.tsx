
import React, { useState } from 'react'

const allUsers = [
    "Patrick",
    "SuperHero",
    "Cutie",
    "Ladoo",
    "Pratanshi"
]


const Search = () => {
    return (
        <div>
            <input placeholder='Search...' type="text" />
        </div>
    )
}


const UseCallBack = () => {

    const [users, setUsers] = useState(allUsers);


    return (
        <div>
            <Search />
        </div>
    )
}

export default UseCallBack
