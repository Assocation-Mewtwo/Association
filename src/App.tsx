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
  const [kilo2, setKilo2] = useState('');
  const [pound2, setPound2] = useState('');
  const [stone2, setStone2] = useState('');
  const [compareOptions, setCompareOptions] = useState([])
  const [imageIndex, setImageIndex] = useState(0)

  // form input conversion to grams for post request to db
  const sendGrams = async () => {
      const body = kilo * 1000;
      setKilo2(kilo);
      setPound2(pound);
      setStone2(stone);
      try {
        //Waiting for the route to be sent. 
        console.log('body', body)
        const rawResponse = await fetch('http://localhost:3000/postgrams', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({grams: body}),
        });
        //////////////////////////////////////////////////
        if (rawResponse.ok) {
          const data = await rawResponse.json();       
          console.log('Grams sent to Donald')
          setCompareOptions(data);
          //deafult to the first image
          setImageIndex(0);
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
    <div id="main-container">
    <LeftContainer kilo={kilo} setKilo={setKilo} pound={pound} setPound={setPound} stone={stone} setStone={setStone} sendGrams={sendGrams} kilo2={kilo2} setKilo2={setKilo2} pound2={pound2} setPound2={setPound2} stone2={stone2} setStone2={setStone2}  />
    <RightContainer kilo={kilo} compareOptions={compareOptions} imageIndex={imageIndex}/>
    </div>
    <ComparedTo compareOptions={compareOptions} setCompareOptions={setCompareOptions} setImageIndex={setImageIndex}/>
    </>
  )

  
    

  
}
export default App;