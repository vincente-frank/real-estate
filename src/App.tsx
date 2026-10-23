import './App.css'
import Clients from './components/clients'
import FAQ from './components/faq'
import Hero from './components/hero'
import NavigationComponent from './components/navigation'
import Property from './components/property'
import Services from './components/services'
import Team from './components/team'
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
      <Team/>
      <FAQ/>
    </div>

  )

}

export default App


