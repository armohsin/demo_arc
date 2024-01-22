import React from 'react'
import Logo from '../Images/arc.png'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">

                <div class="inline-flex">
                    <NavLink to="/">
                    <img src={Logo} alt="Logo" className="w-24 mx-auto " />
                    </NavLink>
                </div>


                <div className="block flex-shrink flex-grow-0 justify-start px-2">
                    <div className="inline-block">
                        <div className="inline-flex items-center max-w-full">
                            <NavLink
                                to="/service-portfolio"
                                className="mr-5 text-gray-700 hover:text-purple-500 active:text-purple-500 transition-colors duration-300"
                            >
                                Service Portfolio
                            </NavLink>
                            <NavLink
                                to="/subscriber-portfolio"
                                className="text-gray-700 hover:text-purple-500 active:text-purple-500 transition-colors duration-300"
                            >
                                Subscriber Portfolio
                            </NavLink>
                        </div>
                    </div>
                </div>


              
            </nav></div>
    )
}

export default Navbar