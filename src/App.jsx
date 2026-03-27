

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'



 const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
 .then(res => res.json())
function App() {
  
  // const   Countries = 

  return (
  
      
<>


<Suspense fallback ={
  <h3> data loadding...</h3>
}>

  <Countries  CountriesPromise ={CountriesPromise}> </Countries>
</Suspense>


</>
    

      

      
    
  )
}

export default App
