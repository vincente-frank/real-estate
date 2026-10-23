import './App.css'
import Clients from './components/clients'
import Hero from './components/hero'
import NavigationComponent from './components/navigation'
import Property from './components/property'
import Services from './components/services'
import Values from './components/values'





const App = () => {

  return (

    <div>
      {/* <NavigationComponent/> */}
      <Hero/>
      <Clients/>
      <Services/>
      <Values/>
      <Property/>
    </div>

  )

}

export default App


