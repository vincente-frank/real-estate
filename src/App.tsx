import './App.css'
import Clients from './components/clients'
import Contacts from './components/contacts'
import FAQ from './components/faq'
import Footer from './components/footer'
import Hero from './components/hero'
import Property from './components/property'
import Services from './components/services'
import Team from './components/team'
import Values from './components/values'





const App = () => {

  return (

    <div>
    
      <Hero/>
      <Clients/>
      <Services/>
      <Values/>
      <Property/>
      <Team/>
      <FAQ/>
      <Contacts/>
      <Footer/>

    </div>

  )

}

export default App


