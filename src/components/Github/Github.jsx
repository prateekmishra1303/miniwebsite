// import { useState, useEffect } from "react";
import React from 'react';
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prateekmishra1303')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    

 return(
         <div id="github" className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8 min-h-[80vh] bg-gray-100">
            <a
             href="https://github.com/prateekmishra1303"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl flex flex-col sm:flex-row items-center p-6 hover:shadow-lg transition"
            >
                <img
                    src={data?.avatar_url}
                    alt="GitHub avatar"
                    className="w-40 h-40 rounded-full border-4 border-gray-600 object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        GitHub Followers
                    </h2>
                    <p className="text-4xl font-bold text-gray-800">{data?.followers}</p>
                </div>
            </a>
        </div>
    );
}


export default Github

export const githubInfoLoader = async() => {
    const response = await fetch ('https://api.github.com/users/prateekmishra1303')
    return response.json()
}