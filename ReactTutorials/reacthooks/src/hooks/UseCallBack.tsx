
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

            <Link to={"/"} >
                Go to the home page
            </Link>
        </div>
    )
}

export default UseCallBack
