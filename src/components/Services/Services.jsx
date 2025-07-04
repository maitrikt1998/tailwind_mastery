import React from 'react'
import { FaUserNurse } from 'react-icons/fa'
import { LuTimerReset } from 'react-icons/lu'
import { MdOutlineRocketLaunch } from 'react-icons/md'

const ServiceData = [
    {
        id:1,
        heading:"Real Logo, Real Fast",
        text:"lorem ipsum dolor",
        icon:<LuTimerReset className="text-6xl" />,
    },
    {
        id: 2,
        heading:"Do it yourself",
        text:"lorem ipsum dolor",
        icon:<FaUserNurse className="text-6xl" />,
    },
    {
        id: 3,
        heading:"Get website-ready Logos",
        text:"lorem ipsum dolor",
        icon:<MdOutlineRocketLaunch className="text-6xl" />,
    },
]
export const Services = () => {
  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    ServiceData.map(({id, heading, text, icon}) => (
                        <div key={id} className="space-y-3 text-center p-5">

                            <div className="flex justify-center">{icon}</div>
                            <h1 className="text-xl font-bold">{heading}</h1>
                            <p>{text}</p>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}
