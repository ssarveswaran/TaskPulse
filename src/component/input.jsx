import React, { useState } from "react";
const Input=(props)=>{
    const [input,settext]=useState("");
    const handlechange=(event)=>{
       settext(event.target.value);
    }
   
    return (
        <div className="form">
           <input type="text" onChange={handlechange} value={input}/>
              <button onClick={()=>{
                props.add(input);
                settext("");
              }}>
                <span>ADD</span>
              </button>
        </div>
    )
}
export default Input