'use client'

import React from 'react';
import { useRef } from 'react';
import {FaSearch} from 'react-icons/fa'


const Form = ({handleSubmit, userName, setUserName}) => {

    const inputRef = useRef();

    return (
        <form onSubmit={handleSubmit} className='flex flex-wrap mt-8 gap-5'>
            <label htmlFor='search' className='hidden'>Find Username</label>
            <input
                className='border-none  max-w-lg py-2 pl-4 pr-3 h-9 rounded-md focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1'
                type='text'
                autoFocus
                ref={inputRef}
                placeholder='Search...'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            >
            </input>
            <button
                className='bg-gradient-to-r from-violet-200 via-blue-200 to-indigo-200 w-11 flex justify-center items-center rounded-sm shadow-sm'
                type='submit'
                aria-label='Add Item'   
                onClick={() => inputRef.current.focus()}
            >
                <FaSearch></FaSearch>
            </button>
        </form >

  )
}

export default Form
