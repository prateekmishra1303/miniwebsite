import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {



    return (
        <div id="home" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 py-10 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mt-10 sm:mt-1 space-y-6 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Prateek Mishra
                            <span className="block text-3xl sm:text-4xl mt-2 sm:mt-0">Developer at TCS</span>
                        </h2>

                        <Link
                            href="https://github.com/your-username/your-project"
                            to="https://docs.google.com/document/d/1_Ru-zvT1s_QRwP3kp69HcSXsdrXrqv_K93gOvJzt0X0/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-80 transition"
                            style={{ backgroundColor: '#76B900' }}
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Projects
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full pt-10 sm:pt-20 sm:my-16">
                    <img className="w-64 sm:w-96 object-contain" src="https://www.animationxpress.com/wp-content/uploads/2015/01/common-man.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center my-8">
                <img className="w-48 sm:w-96 object-contain" src="https://data1.ibtimes.co.in/en/full/558415/rk-laxman.jpg?w=667" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Mai Software Banata Hai Re Baba!!</h1>
        </div>
    );
}