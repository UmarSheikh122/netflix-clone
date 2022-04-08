import React from 'react'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import List from '../../Components/List/List'
import  './home.scss'
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
    </div>
  )
}

export default Home