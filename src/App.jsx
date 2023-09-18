import React from 'react'; // Import React
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from '../components/Post' 

const App = () => {

  return (

    
    <div className='App'>
        <img
        src='../components/banner.jpg' // Replace with the actual path to your image
        alt='League of Legends Heading' // Provide a suitable alt text for accessibility
        className='heading-image'
      />
      <header className='head-font'><h1>Choose Your Champ</h1></header>
       <div className='post-container'>
      <Post name={"Warwick"}
        release={"02/21/2009"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-gb/champions/warwick/"}
        link={"../components/warwick.jpeg"}
      />
        
      <Post name={"Briar"}
        release={"09/15/2023"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/briar/"}
        link={"../components/briar.jpeg"}
      />
      <Post name={"Evelyn"}
        release={"05/01/2009"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/evelynn/"}
        link={"../components/evelyn.jpeg"} />
      <Post name={"Ahri"}
        release={"12/14/2011"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/evelynn/"}
        link={"../components/ahri.jpeg"} />
      <Post name={"Fiddlesticks"}
        release={"02/21/2009"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/evelynn/"}
        link={"../components/fiddlesticks.jpeg"}/>
      <Post name={"Graves"}
        release={"10/19/2011"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/graves/"}
          link={"../components/graves.jpeg"} />
        <Post name={"Jax"}
        release={"02/21/2009"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/jax/"}
          link={"../components/jax.jpeg"} />
        <Post name={"Kai'sa"}
        release={"03/07/2017"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/kai-sa/"}
          link={"../components/kaisa.jpeg"} />
        <Post name={"Mordekaiser"}
        release={"02/24/2010"}
        viewSite={"View Site"}
        hyperLink={"https://www.leagueoflegends.com/en-us/champions/mordekaiser/"}
        link={"../components/mordekaiser.jpeg"}/>
        
      </div>
      </div>
  )
}

export default App
