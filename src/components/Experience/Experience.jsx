import React from 'react'


export default function Experience() {
    return (
        <div id="experience" className="py-16 min-h-[80vh] bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vcH6V3ued_S6UQBXzlx-jQ7QlnjJg3ebKa1Gzdkpo5LFq5zXopUhTvqRh9XuoVybATE&usqp=CAU"
                            alt="image"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Naam Prateek Mishra. Experience ke naam pe main “file” nahi, pura repo leke aata hoon!
                        </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                                2 saal 7 mahine se TCS mein full legit development kar raha hoon — na jugaad, na shortcut.
                                Frontend mera core playground hai. <span className="font-bold">HTML, CSS, JavaScript aur React</span> ke saath daily jugalbandi hoti hai — <span className="font-bold">reusable components, responsive designs, hooks, context API…</span> sab mere tools hain!
                            </p>

                            <p className="mt-4 text-gray-600">
                                🔧 Design systems? Karke diya hai.<br />
                                🧠 Performance optimization? Kai baar.<br />
                                🎨 UI polish? Bhai, mera signature hai wo.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Client ne kaha: “UI thoda aur modern ho sakta hai?”  
                                Maine kaha: “Hold my semicolon...” — aur design specs dekhte hi pixel-perfect code bana diya!
                            </p>

                            <p className="mt-4 text-gray-600">
                                Backend ka bhi scene hai mere paas. <span className="font-bold">Java, Spring Boot, REST APIs –</span> sab se dosti hai. <span className="font-bold">Microservices?</span> Haan bhai, banaye bhi hain, deploy bhi kiye hain.
                                <span className="font-bold">PostgreSQL aur MySQL</span> ke saath relation kaafi deep hai — queries likhta hoon aise jaise lyrics, aur data nikalta hai dance karke!
                            </p>

                            <p className="mt-4 text-gray-600">
                                Tools bhi mere toolbox mein full hai<span className="font-bold">: Git, GitHub, Postman, PuTTY, VS Code, Linux —</span>  sab ke saath comfort level aisa jaise old friends ho.
                            </p>

                            <p className="mt-4 text-gray-600">
                                Bottom line? Agar production mein deploy hona hai, toh mujhe bolo. Code likhna hai? System samjhana hai? no worries!! <span className="text-indigo-600 font-bold">Hello Dear I am Hear no fikar bas karo zikar!</span>
                            </p>

                    </div>
                </div>
            </div>
        </div>
    );
}