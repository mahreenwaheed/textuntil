// import logo from './logo.svg';
// import './App.css';



import { useState } from "react";
import Navbar from "./components/Navbar";

import Alert from "./components/Alert";

import { Route, Router } from "react-router-dom";
import About from "./components/About";
import TextForm from "./components/TextForm";






function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },1500);
  }

  const togglemode =()=>{
    if(mode === 'light'){
     
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("enable on the dark mode","success") ;
      document.title = 'Text Until - darkmode';

    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("enable on the light mode","success") ;
      document.title = 'Text Until -  lightmode';

    }
  }
  return (
  <>
  {/* <Navbar  title = "textutils"  abouttitle = "aboutdata" /> */}
<Navbar  title =  'textutils' mode ={mode}  togglemode={togglemode}/>

<Alert alert={alert} />
<div className="container">

       
           {/* <About /> */}
    
      <TextForm showAlert={showAlert} heading="Text change" mode={mode}/>
                 
                
                
  
</div>


  </>
  );
}

   
    
export default App;