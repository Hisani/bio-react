import React from 'react';
import face from './face.jpg';
import Foot from './Footer.js'

export default function App() {
  return (

    

    <div className="main">
      
      
      <img className='img' src={face} alt='bio-face' />
      <div className='header-content'> 
        <h2>Luqman Eleshin</h2>
        <p>Front End developer</p>
        <p>Luqman's Brief</p>
        <div className='btn'>
          <button><a href='mailto:eleshinluqman@gmail.com'>Email</a></button>
          <button><a href='https://www.linkedin.com/in/luqman-eleshin-442b2a1b4/'>LinkedIN</a></button>
        </div>
      </div>
      <div className='note'>
        <h2>About</h2>
        <p className='abt'>lorem 'm luqman Eleshin a photographer
          and a Retoucher based in Lagos Nigeria,
          captivated by the amount of mystery i'm
          able to bring to life with my work stations</p>

        <h3>Interest</h3>
        <p className='abt'>Personally, i like to excercise, cook and talk to friends,
        I'm also a core volunteer for the sdgs and advocate good. i enjoy law, crime and political movies</p>
      </div>

      <Foot/>
    </div>

  
  );
}

