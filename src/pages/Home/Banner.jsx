import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>Keep your medical library up to date with this week’s newest additions. 
                Discover essential resources, updated clinical manuals, and expert-authored publications to support excellence in healthcare delivery.</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner

// All design and style of the banner is copied from the figma design provided by the client. 
// The banner is responsive and looks good on all screen sizes.

// All the styling is done using tailwind css and the banner image is imported from the assets folder. 
// The banner image is a placeholder image and can be replaced with any image of your choice. 
// The button is also styled using tailwind css and can be customized as per your requirements.