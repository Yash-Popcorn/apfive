import { useState } from "react";

const references = ["Dashboard", "AI Bot", "Sign Up", "Login"]

export default function Navbar() {
    /**
     * Use select-none to remove navbar type cursor
     */

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    console.log(isOpen)
    return (
        <nav
            className="bg-slate-50 h-16 border-b-2 select-none"
        >
            <div 
                className="max-w-screen-xl flex items-center justify-between mx-auto p-2"
            >
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="/Logo.png" className="h-12 mr-3" alt="AP Five Logo" />
                    <span className="self-center text-2xl whitespace-nowrap text-slate-700 font-bold">AP Five</span>
                </a>
                <div className="flex space-x-4 invisible sm:visible ml-auto">
                    {
                        references.map((value) => {
                            return (
                                <p 
                                    className="transition ease-in-out font-semibold font-sans text-slate-700 hover:text-teal-600"
                                    key={`r${value}`}
                                >
                                    {value}
                                </p>
                            )
                        })
                    }
                </div>
                <div className="relative inline-block text-left sm:hidden">
                    <button data-dropdown-toggle="dropdown" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {
                        isOpen && (
                            <div className="dropdown absolute right-0 z-50">
                                <ul className="py-1 rounded-md bg-slate-700 shadow-xs">
                                    {
                                        references.map((value) => {
                                            return (
                                                <li
                                                    key={`a${value}`}
                                                >
                                                    <a href="/test" className="transition ease-in-out block px-4 py-2 text-sm text-white hover:bg-gray-800 font-semibold">
                                                        {value}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>

            </div>
        </nav>
    )
}