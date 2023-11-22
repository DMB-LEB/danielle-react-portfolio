import React from 'react';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    </React.StrictMode>,
  )

function Intro(){
    return (
        <div className="flex items-center
        justify-center flex-col text-center 
        pt-20 pb-6">
            <h1>Danielle LeBrun</h1>
            <p>Bootcamp Student</p>
            <p>PUT BIO HERE</p>
        </div>
    )
}

export default Intro;