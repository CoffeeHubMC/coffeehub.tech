import React from "react";
import {GoMarkGithub} from 'react-icons/go';
import {FaDiscord} from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900 mt-4">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" className="flex items-center">
                    <img src="coffee.png" className="mr-3 h-6 sm:h-9" alt="CoffeeHub Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CoffeeHub</span>
                </a>
                <div className="flex items-center md:order-2">
                    <a href="//coffeehub.tech/github"
                       className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4
                        focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5
                         mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <div className="flex inline align-middle items-center">
                            <GoMarkGithub/>
                            <p className={"ml-1"}>GitHub</p>
                        </div>
                    </a>
                    <a href="//coffeehub.tech/discord"
                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                        font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2
                        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <div className="flex inline align-middle items-center">
                            <FaDiscord/>
                            <p className={"ml-1"}>Discord</p>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}