import React from 'react'
import notii from '../../assets/notti.png'
const Blog = () => {
  return (
    <div className='m-6'>
<h1 className='font-poppins font-bold text-2xl text-sky-500 '>Blog</h1>
<div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
<div
          className="bg-contain  h-52 bg-center duration-1000 hover:scale-90 rounded-2xl cursor-pointer"
          style={{ backgroundImage: `url(${notii})` }} onClick={() => {
            window.open("https://www.notii.tech/", "_blank");
          }}
        >
          {" "}
        </div>
</div>
    </div>
  )
}

export default Blog