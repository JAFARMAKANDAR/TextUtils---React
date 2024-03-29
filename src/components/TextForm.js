import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convereted to uppercase!", "success")
    }

    const handleLoClick = ()=>{
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Convereted to lowercase!", "success")
     } 


     const handleClearClick = ()=>{   
       let newText = '';
       setText(newText)
       props.showAlert("Clear text!", "success")
     } 

    const handleCopy = ()=>{   
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success")
     } 

     const handleExtraSpaces = ()=>{   
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("extra Spaces removed!", "success")
     } 

  

    const handleOnChange = (event)=>{
        //console.log("on Change ");
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
    // text = "new text";   // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
        <div className= "container" style= {{color: props.mode==='dark'? 'white': '#042743'}}>
            <h1 >{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'? 'white': '#042743'}} id="mybox"  rows="8"></textarea>
            </div>
           
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LOWERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space </button>
            

        </div>
        <div className="container my-3"  style= {{color: props.mode==='dark'? 'white': '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something in the textbox to preview it here"}</p>

        </div>
        </>
    )
}
