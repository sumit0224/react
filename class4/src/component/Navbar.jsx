import React from 'react'

const Navbar = () => {
    const links = [{link: "Dribbble", href: "#", class: "text-2xl"}, {link: "explores", href:"#"}, {link: "Hire Talent", href: "#"}, {link: "get Hired", href: "#"}, {link: "community", href: "#"}]
  return (
    <>
    <div className='w-full h-22 text-black text-lg  flex justify-between items-center px-10  '>
        <div className='flex gap-10'>
            {links.map((item, index)=>{
                return <a  className={item.class} href={item.href}>{item.link}</a>
            })}
        </div>
        <div className='flex gap-10'>
            <button>Sign up </button>
            <button className='px-5 py-2 bg-black text-white rounded-3xl'>Login</button>
        </div>
    </div>

    </>
  )
}

export default Navbar