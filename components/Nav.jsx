'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProvider] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async() =>{
      const response = await getProviders();

      setProvider(response);
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between mb-16 pt-3 w-full">
      <Link href='/' className="flex gap-2 flex-center">
      <Image
        src="/assets/images/logo 1.svg"
        width={30}
        height={30}
        alt="Portal logo"
        className="object-contain"
      />
      <p className="logo_text">Gitarch</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden ">
        {session?.user ? 
        (<div className="flex gap-3 md:gap-5">
          <Link href='/Home' className="black_btn">
            Home
          </Link>
          <button type="button" onClick={signOut} className="outline_btn">
          Sign Out
          </button>
          <Link href='/profile'>
            <Image
              src={session?.user.image}
              alt="profile image"
              width={37}
              height={37}
              className="rounded-full"
            />
          </Link>
        </div>): 
        (<>
          {
            providers && Object.values(providers).map(( provider) => (
              <button type="button" key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}>
                Sign In
              </button>
            ))
          }
        </> )}
      </div>

      {/* Mobile Nav */}

      <div className="sm:hidden flex relative">
        {
          session?.user ?
          (<div className="flex">
            <Image
              src={session?.user.image}
              alt="profile image"
              width={37}
              height={37}
              className="rounded-full"
              onClick={()=> setToggleDropdown((prev) => !prev)}
            />
            {
              toggleDropdown &&
              (<div className="dropdown">
                <Link href='/profile' className="dropdown_link" onClick={!toggleDropdown}>
                  My Profile
                </Link>
                <button type="button" onClick={() => {!toggleDropdown; signOut()}} className=" mt-5 w-full black_btn">
                  Sign Out
                </button>
              </div>)
            }
          </div>):
          (<>
          {
            providers && Object.values(providers).map(( provider) => (
              <button type="button" key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}>
                Sign In
              </button>
            ))
          }
          </>)
        }
      </div>
    </nav>
  )
}

export default Nav
