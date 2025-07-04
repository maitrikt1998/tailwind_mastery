import React from 'react';

const Hero = ({ reverse, image, text, desc}) => {
  return (
    <>
        <main className="container mt-14 sm:mt-0">
            <div className="min-h-[500px] container flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center ml-10 mr-10">
                    {/* Image Section */}
                    <div className={` ${reverse ? "order-last" : ""} `}>
                        <img src={image} alt="" className="w-[300px]" />
                    </div>
                    {/* Content Section */}
                    <div className={` {${reverse ? "order-last" : ""}} space-y-5 ml-10 mr-10`}>
                        <h1 className="text-4xl font-bold">{text}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Hero;
