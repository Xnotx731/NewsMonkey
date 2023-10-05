import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";


export default class App extends Component {
  pageSize = 5;
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
           
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}keys="general" pageSize={this.pageSize} category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress}keys="business" pageSize={this.pageSize} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}keys="entertainment" pageSize={this.pageSize} category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}keys="general" pageSize={this.pageSize} category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}keys="health" pageSize={this.pageSize} category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}keys="science" pageSize={this.pageSize} category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}keys="sports" pageSize={this.pageSize} category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}keys="technology" pageSize={this.pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}




