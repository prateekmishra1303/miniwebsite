import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="name_logo.png"
                                className="mr-3 h-12 sm:h-20 lg:h-24"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/prateekmishra1303"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="block text-center text-sm text-gray-500 sm:text-left">
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            prateekmishra1303@gmail.com
                        </a>
                    </span>
                    <div className="flex flex-wrap gap-4 mt-6 sm:justify-center sm:mt-0">
                        <a
                            href="https://github.com/prateekmishra1303"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 .297a12 12 0 0 0-3.794 23.4c.6.11.82-.26.82-.577v-2.02c-3.338.724-4.042-1.61-4.042-1.61a3.183 3.183 0 0 0-1.334-1.753c-1.09-.745.082-.73.082-.73a2.525 2.525 0 0 1 1.842 1.24 2.557 2.557 0 0 0 3.497 1 2.564 2.564 0 0 1 .764-1.61c-2.665-.3-5.466-1.332-5.466-5.932a4.632 4.632 0 0 1 1.23-3.208 4.307 4.307 0 0 1 .116-3.165s1.008-.323 3.3 1.23a11.48 11.48 0 0 1 6.003 0c2.29-1.554 3.296-1.23 3.296-1.23.65 1.651.236 2.872.118 3.165a4.611 4.611 0 0 1 1.228 3.208c0 4.61-2.806 5.628-5.48 5.922a2.89 2.89 0 0 1 .828 2.243v3.323c0 .319.216.694.825.576A12 12 0 0 0 12 .297Z"
                            />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/prateek-mishra-5a267020b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-700 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM7.293 19H4.586v-9h2.707v9zM5.939 8.607a1.563 1.563 0 1 1 0-3.126 1.563 1.563 0 0 1 0 3.126zM20 19h-2.707v-4.5c0-1.179-.021-2.696-1.641-2.696-1.643 0-1.895 1.285-1.895 2.611V19h-2.707v-9h2.597v1.231h.037c.362-.686 1.246-1.409 2.562-1.409 2.739 0 3.247 1.804 3.247 4.147V19z"
                            />
                            </svg>
                        </a>

                        <a
                            href="https://discord.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 transition-colors"
                            aria-label="Discord"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.075.075 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.417 18.417 0 0 0-5.5 0 12.92 12.92 0 0 0-.622-1.25.077.077 0 0 0-.079-.037c-1.654.285-3.333.808-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.036-.319 13.578.099 18.057a.082.082 0 0 0 .031.056 20.097 20.097 0 0 0 6.198 3.1.078.078 0 0 0 .084-.028c.477-.65.901-1.34 1.267-2.062a.076.076 0 0 0-.041-.104 13.105 13.105 0 0 1-1.872-.891.077.077 0 0 1-.008-.128c.126-.094.253-.192.374-.291a.075.075 0 0 1 .079-.01c3.927 1.79 8.18 1.79 12.061 0a.075.075 0 0 1 .079.009c.121.099.248.197.374.291a.077.077 0 0 1-.006.128c-.601.353-1.228.66-1.873.891a.076.076 0 0 0-.04.105 11.62 11.62 0 0 0 1.267 2.061.076.076 0 0 0 .084.028 19.99 19.99 0 0 0 6.198-3.1.077.077 0 0 0 .03-.056c.5-5.177-.838-9.687-3.548-13.66a.061.061 0 0 0-.03-.027zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.954-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.954 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.954-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"
                            />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}