import { useState } from 'react'
import Banner from './Banner.tsx'
import LeftContainer from './LeftContainer.tsx'
import RightContainer from './RightContainer.tsx'
import ComparedTo from './ComparedTo'
import NavBar from './NavBar.tsx'
import './App.css'

function App() {
  //State for comparison. 
  const [kilo, setKilo] = useState('');
  const [pound, setPounds] = useState('');
  const [stone, setStone] = useState('');

  const reset = () => {
    setKilo('')
    setPounds('')
    setStone('')
  }

  //post request
    //set data returned from request in relevant state

    // character input sensitivity to disable sibling input forms

    // const checkState = () => {
      
    //   if (kilo){
    //     setPounds()
    //     setStone()
    //   } else if (pound){
    //     setKilo()
    //     setStone();
    //   } else {
    //     setKilo()
    //     setPounds()
    //   }
    // }

    // const postkilos = async () => {
    //   let body = 0;
    //   if (kilo)
      
    //   try {
    //     const response = await fetch('/api', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(),
    //     });
    //     if (response.ok) {
  
    //     } else {
    //       console.error('Error ');
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    

  return (
    <>
    <Banner />
    <NavBar />
    <LeftContainer />
    <RightContainer />
    <ComparedTo />
    </>
  )
}
export default App;