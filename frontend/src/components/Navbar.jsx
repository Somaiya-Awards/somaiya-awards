import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className='p-1 bg-white'>
            <div className='flex font-Poppins'>

                {/* Image  */}
                <Link to='/'>
                    <div className='m-5'>
                        <img src="https://www.somaiya.edu.in/assets/default_asset/img/somiaya-vidyavihar-logo.svg"  alt='kjsit-logo' className='scale-125'  />
                    </div>
                </Link>

                {/* Links */}
                <div className='flex items-center' >
                     <Link to={'/'}>
                        <div className=' cursor-pointer p-2 mx-4 hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Home</b>
                            </p>
                        </div>
                    </Link>

                    <Link to={'/guidelines'}>
                        <div className=' cursor-pointer p-2 mx-4 hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Guidelines</b>
                            </p>
                        </div>
                    </Link>

                    <Link to={'/groups'}>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Groups</b>
                            </p>
                        </div>
                    </Link>

                    <Link to='/results'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Results</b>
                            </p>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>About</b>
                            </p>
                        </div>
                    </Link>
                </div>

               
                {/*Trust*/}
                            
                <div className='flex items-center w-full justify-end'>
                    <a href='https://www.somaiya.com/'>
                        <img src="https://www.somaiya.edu.in//assets/arigel_general/img/homepage/Trust.svg" width="75" height="54.79"  alt='trust-logo' className='scale-100'/>
                    </a>
                </div>
                
            </div>
           
            
        </div>
    )
}

export default Navbar
