'use client'
import React from 'react'
import Image from 'next/image'


const GitUser = ({users}) => {
    
    console.log(users)

    return (
        <main className='flex justify-center items-center gap-8 flex-wrap'> 
            <div>
                <Image src={users.avatar_url} width={180} height={180} className="rounded-md" alt='Profile Picture'/> 
            </div>
            <div className='flex flex-col bg-slate-300 h-44 rounded-md p-5'>
                {users.login} 
                <a href={users.html_url} className='outline_btn mt-3'>View profile</a> 
                <br className="max-md:hidden"/>
                <span className='w-96'>{users.bio}</span>
            </div>

        </main>
  )
}

export default GitUser
