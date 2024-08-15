
import Signup from "./assets/Signup"
import Login from "./assets/login"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Home from "./assets/Home"
import Meeting from "./assets/Meeting"

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home/>}></Route>
      
     <Route path="/webinar" element={<Meeting/>}></Route> 
     <Route path="/conference" element={<Meeting/>}></Route> 
     <Route path="/virtual-events" element={<Meeting/>}></Route> 
 
     </Routes>
     </BrowserRouter>
     </>
    
  )
}

export default App
