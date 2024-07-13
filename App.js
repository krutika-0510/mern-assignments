//Basic Event Handling
import { useState } from 'react'         // Importing useState hook from React library
import './App.css'                      //import App.css file for styling

function App() {                       //created function App
  function handleClick(){                   //created function handleClick it works when button was clicked             
    console.log("button was clicked")        //prints "button was clicked" in console
  }

  function handleChange(event){              //created function handleChange it works when input change
    console.log(event.target.value)          //prints value of input to console
  }

  const [divStyle, setDivStyle] = useState({});             

  function handleMouseEnter(){                       //created function handleMouseEnter it works when mouse enter in component 
    setDivStyle({ backgroundColor: 'aqua'})          //set background color yellow        
  }

  function handleMouseLeave(){                  //created function handleMouseLeave it works when mouse leave from component 
    setDivStyle({ backgroundColor: 'white' })          //set background color white
  }

  return (                             //return only one fragment but multiple elemets of fragment
    <>
      <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={divStyle}>            {/* created div with className,onMouseEnter,onMouseLeave and style */}
      <button onClick={handleClick}>Click</button>           {/* created button click with onClick */}
      <input type="text" onChange={handleChange} style={{margin:"2em" ,padding:"2rem"}}/>    {/* created input box with onChange and style */}
      </div>
    </>
  )
}

export default App