import { useState } from 'react'
import {Link , NavLink} from "react-router-dom"

function Sidebar() {
    const [hide , setHide] = useState(true)
    const hideFun = ()=>{
        setHide(!hide)
    }
     return (
        <>
            <div className="col-span-1  md:flex md:justify-end " >
                <nav className="">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold  uppercase p-4 ">
                            <Link className="hover:text-gray-800" to="/">Fast food</Link>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden" id="burger">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <ul className="md:block  pr-2 " id="menu" >
                        <li className="font-bold py-1 border-r-4 border-red-400">
                            <Link to="/"  className="px-4 flex justify-end items-center">
                                <span>Home</span>
                                <i className="fa-solid fa-house-user ml-2"></i>
                            </Link>
                        </li>
                        <li className="py-1 border-r-4 border-transparent">
                            <Link className="px-4 flex justify-end items-center" to="/about">
                                <span>About</span>
                                <i className="fa-solid fa-address-card ml-2"></i>
                            </Link>
                        </li>
                        <li className="py-1 border-r-4 border-transparent">
                            <Link className="px-4 flex justify-end items-center" to="/contact">
                                <span>Contact</span>
                                <i className="fa-solid fa-mobile-screen ml-2"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <!-- end nav  --> */}

        </>

    )
}

export default Sidebar