import React from 'react'


export default function Experience() {
    return (
        <div id="about" className="py-16 min-h-[80vh] bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://magnificentmaharashtra.wordpress.com/wp-content/uploads/2015/02/common-man-of-r-k-laxman.jpg"
                            alt="Common Man"
                            className="w-full h-auto max-w-[480px] mx-auto md:mx-0 rounded-lg"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Naam hai Prateek Mishra
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                            React mera religion, CSS meri poetry, aur JavaScript meri jaan hai. TCS mein 2 saal 7 mahine se code likh raha hoon, par coding mere liye sirf kaam nahi, full-time high hai!
                        </p>

                        <br/>
                        <h4 className="text-xl text-gray-600 font-bold md:text-3xl">
                            👨‍💻 Frontend Developer by Role, Artist by Soul
                        </h4>

                        <p className="mt-4 text-gray-600">
                            Mujhe sirf UI nahi banana aata, experience create karta hoon.
                            Component likhta hoon toh reusability chillati hai,
                            Performance tune karta hoon toh Lighthouse report bhi taali bajata hai.
                            Figma ho ya figma ke baap ka design — sabko pixel-perfect bana ke deta hoon.
                        </p>

                        <br/>
                        <h4 className="text-xl text-gray-600 font-bold md:text-3xl">
                        💡 Stack mera thoda hatke hai, par kaam solid:
                        </h4>
                        
                        <br/>
                            <ul>

                                <li>• React.js – Hooks, Context, Router, Forms, Reusable Components — sab on tips</li>
                                <li>• HTML, CSS, JavaScript – inke bina toh subah ki chai bhi nahi chalti</li>
                                <li>• Design Systems – Responsive layouts, accessibility — sab proper se</li>
                                <li>• Java + Spring Boot – Backend ka jugaad nahi, system banata hoon</li>
                                <li>• PostgreSQL, MySQL – Query likhta hoon toh data khud aa jaata hai</li>
                                <li>• Git, VSCode, Netlify, Eclipse – Tools mere weapon hai bhidu ⚔️</li>
                                
                            </ul>
                        <br/>
                        <h4 className="text-xl text-gray-600 font-bold md:text-3xl">
                            🧠 Mindset kya hai?
                        </h4>
                        
                        <br/>

                        <p>
                            <ul>
                                “Code sirf chalta nahi, baat bhi karta hai.”
                                Client bole “yeh possible hai kya?”
                                Main bola: “React hai na bhai! Possible nahi toh possible banate hain!”
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}