import React from 'react'
export default function About() {
    return (
        <div className="py-16 min-h-[80vh] bg-white">
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
                            Naam Prateek Mishra.
                            React mera religion hai, CSS meri poetry, aur JavaScript… arey bhai, wo toh meri jaan hai!
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                            2 saal 7 mahine se TCS mein full legit code kar raha hoon — koi jugaadbaazi nahi, pure developer ki tarah.
                            Front-end mera playground hai — HTML, CSS, JavaScript, React… sab ke saath daily ludo khelta hoon aur jeetta bhi hoon!
                            Design system, reusable components, hooks, performance tuning — sab kuch aise kar ke deta hoon jaise chef masala daal raha ho curry mein — “taste bhi, scalability bhi!”
                        </p>
                        <p className="mt-4 text-gray-600">
                            Client bole: “Page load slow hai…”
                            Main bola: “Aapka internet slow hai bhai 😎… but koi nhi, Abbhi optimization karke deta hoon!”

                            Now listen — backend ka bhi “thoda kaafi” aata hai mujhe.
                            Java? Spring Boot? Microservices?
                            Arey bhai, REST API toh main aise banata hoon jaise maggi – 2 minute mein ready!
                            PostgreSQL aur MySQL se toh meri purani dosti hai — query likhne ka style aisa, ki data khud bolta hai: ‘Le bhai, le… main hi hoon jo chahiye tha!’
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}