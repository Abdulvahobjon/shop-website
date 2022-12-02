import React from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import Data from '../data/Data'

function Home() {
  return (
    <div className="text-gray-600">
    <div className="grid lg:grid-cols-4 md:grid-cols-3">
       <Sidebar/>

        <main className="xl:px-16 xl:py-16 py-10 px-10 bg-gray-100 lg:col-span-3 md:col-span-2 " >
          <div className="text-red-400 justify-center md:justify-end flex">
            <a href="#" className=" border-2 border-red-400 text-primary rounded-full py-2 px-3 ummercase text-xs font-bold cursor-pointer tracking-wider hover:opacity-75 active:opacity-50">log in </a>
            <a href="#" className=" border-2 border-red-400 text-primary ml-2 rounded-full py-2 px-3 ummercase text-xs font-bold cursor-pointer tracking-wider hover:opacity-75 active:opacity-50">Sign up </a>
          </div>

        

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold mb-4">Recipes</h2>
            <h3 className="text-2xl font-semibold ">Recipes</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-grey-200 border-b">
              Latest Recipes
            </h4>
            <div className="mt-8 lg:grid-cols-3 md:grid-cols-2 gap-10 grid">
              {/* <!-- cards go hero --> */}
             
                {Data.map((item)=>{
                  return  <Card key={item.id} img={item.img} title={item.title} text={item.text} time={item.time}  />
                })}
            

             
              
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-grey-200">
              Most Popular
            </h4>
            <div className="mt-8">
              {/* <!-- cards go hero  --> */}
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-200 text-gray-400 rounded-full py-2 px-3 ummercase text-xs font-bold cursor-pointer tracking-wider hover:opacity-75 active:opacity-50 trnsform hover:scale-125 ease-in duration-300">Load more</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home