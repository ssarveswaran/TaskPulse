import { useState } from 'react'
import './App.css'
import Input from './component/input'
import Todo from './component/todo'

function App() {
   const [text,settext]=useState([])
   const additem=(inpu)=>{
    settext((prevItem)=>{
    return [...prevItem,inpu]
    })
   }
   const del=(id)=>{
    settext((prev)=>{
      return prev.filter((t,i)=>{
        return i!=id;
      })
    })

   }
   console.log(text);
  return (
    <div className="container">
      <div className="heading">
      <h2>To-Do-List</h2>
      <Input add={additem}/>
      <div>
        <ul>
       {
        text.map((t,i)=>{
          return <Todo text={t} key={i} del={del} id={i} />
        })
       }
        </ul>
      </div>
    </div></div>
  )
}

export default App
