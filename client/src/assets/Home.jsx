
import Nav from './Nav'
import Events from './Events'

import Footer from "./Footer"
const Home = () => {
  return (
   <>
   <Nav />
   <br />
   <h1 className='home'>OUR EVENTS</h1>
   <br />
    <Events /> 
    <br />
    <Footer />
   </>
  )
}

export default Home