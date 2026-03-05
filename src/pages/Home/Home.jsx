import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'


const home = () => {
  return (
    <div>
        <Banner/>
        <TopSellers/>
        <Recommended/>
        </div>
  )
}

export default home