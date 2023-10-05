import './App.css';
import Navbar from './components/Navbar'

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
            <Route exact path="/"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="general" pageSize={ pageSize} category="general" />} />
            <Route exact path="/business"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="business" pageSize={ pageSize} category="business" />} />
            <Route exact path="/entertainment"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="entertainment" pageSize={ pageSize} category="entertainment" />} />
            <Route exact path="/general"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="general" pageSize={ pageSize} category="general" />} />
            <Route exact path="/health"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="health" pageSize={ pageSize} category="health" />} />
            <Route exact path="/science"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="science" pageSize={ pageSize} category="science" />} />
            <Route exact path="/sports"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="sports" pageSize={ pageSize} category="sports" />} />
            <Route exact path="/technology"  element={<News  setProgress={ setProgress} apikey={ apikey} keys="technology" pageSize={ pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;





