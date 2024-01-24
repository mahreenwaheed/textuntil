import React,{useState} from 'react';

export default function Navbar(props) {


    const handlechange =(event)=>{
        settext(event.target.value);

    }
    const handleupcaseclick = ()=>{
        let newtext =  text.toUpperCase();
        settext(newtext);
        
    }

    const handlelowcaseclick =()=>{
        let newtext =  text.toLowerCase();
        settext(newtext);

    }
   
    const handleclear =()=>{
        let nexttext = '';
        settext(nexttext);
    }

    const handlecopytext = ()=>{
     let text = document.getElementById("mybox");
     text.select();
     navigator.clipboard.writeText(text.value);
     
     
    }
    const handleextraspace = ()=>{
        let nexttext = text.split(/[ ]+/);
        settext(nexttext.join(""));
    }

    
    const handledownloadfile = () => {
    const pdfurl = "";
    const text =document.createElement("a");
    text.href = pdfurl;
    text.download = "mahreen.pdf";
    text.click();
       
    };

         
        const [text,settext] = useState("open in state");
    return (
  
        <>
        <div className='container'style={{color:props.mode ==='dark'?'white':'black' }} >
 <h1>{props.heading}</h1>

<div className="mb-3">
  <label for="mybox" className="form-label"></label>
  <textarea className="form-control" value={text}  style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode ==='dark'?'white':'black'  }}
   onChange={handlechange}id="mybox" rows="8"></textarea>
<br></br>
<button className='btn btn-primary mx-2' onClick={handleupcaseclick}>Convert to Uppcase</button>

<button className='btn btn-primary mx-2' onClick={handlelowcaseclick}>Convert to lowcase</button>

<button className='btn btn-primary mx-2' onClick={handleclear}>Clear text</button>

<button className='btn btn-primary mx-2' onClick={handlecopytext}>Copy text</button>

<button className='btn btn-primary mx-2' onClick={handleextraspace}>Extra space</button>
<button className='btn btn-primary mx-2' onClick={handledownloadfile}>download text</button>

</div>
</div>

<div className='container my-3' style={{color:props.mode ==='dark'?'white':'black'}} >
<h1>Text Summary</h1>
<p> {text.split("").length} words and  {text.length} characters </p>
<p> {0.008 * text.split("").length} minute</p>
<h3>Previous</h3>
<p>{text.length>0?text:"Enter the Text Here "}</p>

</div>
        </>
    )
}

