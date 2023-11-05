import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const onChangehandler=(e)=>{
      setText(e.target.value);
  }
  const save=()=>{
   setSaved(text);
  }
  const upClickhandler=()=>{
    let newText=text.toUpperCase();
    setpreText(newText);
  } 
  const lowClickhandler=()=>{
    let newText = text.toLowerCase();
    setpreText(newText);
  }
  const clearfun=()=>{
    let newText="";
    setText(newText);
    setpreText(newText);
  }
  const reverse=()=>{
    let newText =text.split("").reverse().join("");
    setpreText(newText);
  }
  const showIn=()=>{
    setpreText(text);
  }
  const [text,setText]=useState('');
  const [savedText,setSaved]=useState("");
  const [pretext,setpreText]=useState("");
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea name="myBox" id="myBox" value={text} onChange={onChangehandler} rows="8" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={showIn}>Show In Preview</button>
         <button className="btn btn-primary mx-3" onClick={reverse}>Convert reverse</button>
         <button className="btn btn-primary mx-3" onClick={lowClickhandler}>Convert to lower case</button>
         <button className="btn btn-primary mx-3" onClick={upClickhandler}>Convert to upper case</button>
         <button className="btn btn-primary mx-3" onClick={clearfun}>Clear text</button>
         <button className="btn btn-primary" onClick={save}>Save Text</button>
        
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length-1} Words,   {text.length} Characters</p>
    </div>
    <div className="container">
      <h1>Preview</h1>
      <textarea name="myBox" id="myBox" value={pretext}  rows="4" className="form-control"></textarea>
      <br />
      <h3>Saved Text</h3>
      <textarea name="myBox" id="myBox" value={savedText}  rows="4" className="form-control"></textarea>
    </div>
    </>
  )
}
TextForm.prototypes ={
    heading : PropTypes.string.isRequired,
}

