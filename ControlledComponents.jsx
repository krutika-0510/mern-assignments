import { useState } from 'react'         // Importing useState hook from React library
function ControlledComponents() {                       

  const [name, setName] = useState(''); 
  const [text, setText] = useState('');

  function handleNameChange(event){              
    setName(event.target.value);
  }

  function handleTextChange(event,){              
    setText(event.target.value);
  }

  function handleChange(){              
    console.log(`Name: ${name} , Text: ${text}`)         
  }

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked); 
  }
            

  return (                            
    <>
      <div className="card" style={{margin:"2em" ,padding:"2rem", backgroundColor:'gold'}} >            
      <p>Enter Name</p>
      <input type="text" value={name} onChange={handleNameChange} style={{margin:"2em" ,padding:"2rem"}}/>    
      <p>Enter Message</p>
      <input type="text" value={text} onChange={handleTextChange} style={{margin:"2em" ,padding:"2rem"}}/>    
      <div>
        <lable>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          Accept Terms and Conditions
        </lable>
      </div>
      <button onClick={handleChange}>Submit</button>           
      </div>
    </>
  )
}

export default ControlledComponents