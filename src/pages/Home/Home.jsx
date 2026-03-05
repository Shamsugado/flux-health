import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'


const home = () => {
  return (
    <div>
        <Banner/>
        <TopSellers/>
        <Recommended/>
        <News/>
        </div>
  )
}

export default home