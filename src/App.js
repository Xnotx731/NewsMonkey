import './App.css';
import Navbar from './components/Navbar'
import Webpage from './components/Webpage';
import React, { useState } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter,Routes,Route} from "react-router-dom";


const App=()=> {
  const pageSize = 5;
  const apikey=process.env.REACT_APP_API;
  const [progress,setProgress]=useState(0)
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={ progress}
           
          />
          <Routes>
            <Route  path="/"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="general" pageSize={ pageSize} category="general" />} />
            <Route  path="/business"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="business" pageSize={ pageSize} category="business" />} />
            <Route  path="/entertainment"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="entertainment" pageSize={ pageSize} category="entertainment" />} />
            <Route  path="/general"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="general" pageSize={ pageSize} category="general" />} />
            <Route  path="/health"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="health" pageSize={ pageSize} category="health" />} />
            <Route  path="/science"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="science" pageSize={ pageSize} category="science" />} />
            <Route  path="/sports"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="sports" pageSize={ pageSize} category="sports" />} />
            <Route  path="/technology"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="technology" pageSize={ pageSize} category="technology" />} />
            <Route path="/tech" element={<Webpage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;





