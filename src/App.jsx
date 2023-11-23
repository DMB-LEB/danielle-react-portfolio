import React from 'react';
import ReactDOM from 'react-dom/client';

import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Resume from './components/resume';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <div className="App">
        <Intro/> 
        <Portfolio/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
