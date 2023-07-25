import { useState } from 'react'
import Banner from './Banner.tsx'
import LeftContainer from './LeftContainer.tsx'
import RightContainer from './RightContainer.tsx'
import ComparedTo from './ComparedTo'
import WeightForm from './WeightForm.tsx'
import './App.css'

function App() {
  //State for comparison. 
  const [kilo, setKilo] = useState('');
  const [pound, setPound] = useState('');
  const [stone, setStone] = useState('');

  const conversionResults = () => {
    if (kilo){
      setStone(kilo * 0.157473)
      setPound(kilo * 2.20462)
    } else if (stone){
      setKilo(stone * 6.35029)
      setPound(stone * 14)
    } else if (pound){
      setKilo(pound * 0.453592)
      setStone(pound * 0.0714286)
    }
  }

  // form input conversion to grams for post request to db
  const sendGrams = async () => {
    let body;
    if (kilo){
      body = kilo * 1000
    } else if (stone){
      body = (stone * 6.35029) * 1000
    } else if (pound){
      body = (pound * 0.453592) * 1000
    }
      try {
        //Waiting for the route to be sent. 
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({grams: body}),
        });
        if (response.ok) {
          console.log('Grams sent to Donald')
          conversionResults()
        } else {
          console.error('Donald didn\'t get Grams');
        }
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <>
    <Banner />
    <WeightForm kilo={kilo} setKilo={setKilo} pound={pound} setPound={setPound} stone={stone} setStone={setStone} sendGrams={sendGrams} />
    <LeftContainer />
    <RightContainer />
    <ComparedTo />
    </>
  )

  
    

  
}
export default App;