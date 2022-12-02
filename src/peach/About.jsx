import React from 'react'
import Sidebar from '../components/Sidebar'
function About() {
    return (
        <div className="text-gray-600">
            <div className="grid lg:grid-cols-4 md:grid-cols-3">
                <Sidebar />

                <main className="xl:px-16 xl:py-16 py-10 px-10 bg-gray-100  h-screen lg:col-span-3 md:col-span-2 " >
                    <div className="text-red-400 justify-center md:justify-end flex">
                        <a href="#" className=" border-2 border-red-400 text-primary rounded-full py-2 px-3 ummercase text-xs font-bold cursor-pointer tracking-wider hover:opacity-75 active:opacity-50">log in </a>
                        <a href="#" className=" border-2 border-red-400 text-primary ml-2 rounded-full py-2 px-3 ummercase text-xs font-bold cursor-pointer tracking-wider hover:opacity-75 active:opacity-50">Sign up </a>
                    </div>



                    <header>
                        <h2 className="text-gray-700 text-6xl font-semibold mb-4">About</h2>
                        <h3 className="text-2xl font-semibold ">No About :(</h3>
                    </header>

                  
                </main>
            </div>
        </div>
    )
}

export default About