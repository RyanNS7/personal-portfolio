import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Header(){

    const [openNavBar, setOpenNavBar] = useState(false)

    function openMoreOptions(){
        setOpenNavBar(!openNavBar)
    }

    return(
        <div className={`fixed w-screen flex text-xl flex-col align-middle p-2 text-white bg-theme-dark md:h-16 sm:text-2xl tm:text-1xl tm:justify-between tm:flex-row`}>
            <div className="w-full flex p-2 justify-between text-center md:p-4 tm:p-2 tm:text-start">
                <a href="#"> <h2 className=" text-4xl tm:text-3xl font-semibold tm:mr-2">Portfólio</h2> </a>

                <button className='text-center tm:hidden' onClick={openMoreOptions}> <GiHamburgerMenu className='text-3xl w-10' /> </button>

            </div>

            <div className={`flex bg-theme-dark absolute ${openNavBar ? 'left-0 opacity-100' : 'left-[-480px]'} top-12 transition-all duration-300 w-full h-44 mt-4 tm:w-auto  tm:h-auto tm:mt-0 tm:mr-1 tm:static`}>
                <ul className="w-full text-center flex flex-col font-semibold md:p-4 tm:p-2 tm:flex-row">
                    <li className="text-2xl p-1 tm:text-xl tm:mr-3"><a href="#"> About </a></li>
                    <li className="text-2xl p-1 tm:text-xl tm:mr-3"><a href="#"> Projects </a></li>
                    <li className="text-2xl p-1 tm:text-xl tm:mr-3"><a href="#"> Skills </a></li>
                    <li className="text-2xl p-1 tm:text-xl"><a href="#"> Contact </a></li>
                </ul>
            </div>
        </div>
    )
}