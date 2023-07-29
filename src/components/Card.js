import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
const Card = ({ desc, img, title, price, id, setInfo}) => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClick = () => {
    setIsOpen(!isOpen)
    }
// console.log(id);
    const handleCard =()=>{
        setInfo(id)
    }
    return (
        <>

            <div className="max-w-2/6 mx-auto mt-2	">

                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <NavLink to="#">
                        <div className='p-5 card__img'>
                            <img className="w-full h-full object-cover" src={img} alt="card" /></div>
                    </NavLink>
                    <div className="p-5">
                        <NavLink to="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white truncate">{title}</h5>
                        </NavLink>
                        <p className={`${isOpen ? 'font-normal text-gray-700 mb-3 dark:text-gray-400':'font-normal text-gray-700 mb-3 dark:text-gray-400 truncate'}`} onClick={handleClick}>{desc}</p>
                        <NavLink to='/details' onClick={handleCard} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >{price}$<svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                    </div>
                </div>

            </div></>
    )
}

export default Card