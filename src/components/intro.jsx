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
        pt-20 pb-6 mr-5 ml-5 pr-5 pl-5">
            <h1 className="text-4x1 md:text-7x1 mb-1
             md:mb-3 font-bold">Danielle LeBrun</h1>
            <p className="text-base md:text-xl mb-3 font-medium">About Me</p>
            <p className="text-sm max-w-xl mb-6 font-small">
                    Danielle here! A little bit about myself, I currently reside in NH, which is also where I am from. 
                I've moved around quite a bit, I have done several cross-country trips. I moved from NH to Mckinney, TX, 
                lived there for about a year, then 
                I moved from TX to Seattle, WA, I lived there for six or seven months, and then moved again back home to good 
                ole NH! I have two lovely fur babies, both are shiba inus. 
                My male shiba is named Sammy, he has also done all of those cross-country trips, he's a well traveled man, and my 
                younger shiba, her name is Keiko. Keiko is 
                not as well traveled, but she is a homebody, so I'm sure she doesn't mind. I worked information technology 
                for a number of years and in doing so
                found love for computers and what they can do. That is what got me started on my next journey, programming!
                <br />
                <br />
                    I'm currently a student at the University of New Hampshire's coding bootcamp, soon to be a graduate!
                The course I'm taking is considered full-stack. It is JavaScript based, along with the basics 
                like HTML and CSS, we learn APIs (web, third-party, and server side), NodeJS, Express, SQL, 
                NoSQL, React, and MERN. Along with those we also cover topics  such as object oriented programming, object 
                relational mapping, 
                and model view controllers. As you navigate to my portfolio page you'll see some projects that display 
                these skills 
                I've learned in my bootcamp! Thank you for taking the time to read my About me and visiting my portfolio!
            </p>
        </div>
    )
}

export default Intro;