'use client';

import Link from 'next/link';
import { Navlink } from './navLink';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlineLogin } from 'react-icons/ai';
import PrimaryButton from '../buttons/PrimaryButton';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  //   const { user, isAuthenticated, handleLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <div className="drawer z-20">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div
            className={` fixed md:px-28 left-0 right-0 top-0 py-2 flex justify-between w-full items-center  ${
              isScroll
                ? ' bg-opacity-70 text-primary-blue shadow-md bg-white/20  backdrop-blur-md'
                : 'text-primary-blue'
            } navbar  gap-2 py-4   `}
          >
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                width={75}
                height={75}
                alt="logo"
                objectPosition="top"
                objectFit="cover"
              />
            </div>

            <div className="flex lg:hidden ">
              <label htmlFor="my-drawer-3" aria-label="open sidebar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-7 w-7 stroke-current text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="lg:flex hidden  px-8 py-2 rounded-2xl  ">
              <div className="inline-flex gap-8 rounded-md">
                {Navlink.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <li className="inline-flex  text-black cursor-pointer hover:text-secondary-blue ">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </div>
            </div>

            <div className=" items-center gap-4 hidden lg:flex">
              <div className="dropdown dropdown-end flex items-center gap-4">
                {/* <div
                      tabIndex={0}
                      role="button"
                      className="avatar btn btn-circle btn-ghost"
                    >
                      <div className="w-10 rounded-full">
              
                          <Image
                            src={`/images/bonsaii.png`}
                            alt="Profile Picture"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
       
                          <FaCircleUser className="h-10 w-10" />
                    
                      </div>
                    </div> */}

                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <Link
                      href="/profile"
                      className="justify-between text-white"
                    >
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="text-white">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button className="w-full text-left text-white">
                      Log out
                    </button>
                  </li>
                </ul>
              </div>

              <PrimaryButton fullwidth={true} onClick={handleLogin}>
                Masuk
                <AiOutlineLogin className="h-5 w-5" />
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* vers mobile */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-60 bg-blue-500 pt-14 ">
            {Navlink.map((item) => (
              <Link key={item.href} href={item.href} className="p-4">
                <li className="inline-flex  hover:text-primary-blue text-white cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}

            <div className="dropdown dropdown-end flex items-center gap-4">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                {/* <div className="w-10 rounded-full">
    
                      <Image
                        src={`/images/bonsaii.png`}
                        alt="Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
             
                      <FaCircleUser className="h-10 w-10" />
      
                  </div> */}
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/profile" className="justify-between text-white">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="text-white">
                    Settings
                  </Link>
                </li>
                <li>
                  <button className="w-full text-left text-white">
                    Log out
                  </button>
                </li>
              </ul>
            </div>

            <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
