'use client'

import Form from '@components/Form'
import GitUser from '@components/GitUser';  
import { useState } from 'react';
import { Spinner } from '@chakra-ui/react'

import { getUsers } from '@utils/apiRequest';


export default function Home() {

  const [userName, setUserName] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  

  const handleSubmit =  async (e) =>{
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await getUsers(userName);
      setUsers(response.data);
      setUserName('');
    } catch (error) {
      alert(error.message)
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text text-center">GitArch</h1>
      <br className="max-md:hidden"/>
      <span className="navy_gradient text-center ">Discover and access GitHub user accounts instantly with Arch</span>
      <Form 
        handleSubmit={handleSubmit}
        userName={userName}
        setUserName={setUserName}
      />
      <br className="max-md:hidden"/>
      {isLoading && <Spinner thickness='1px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>}
      {userName.length !== 0?(<GitUser users={users}/>): null}
    </section>
  )
}
