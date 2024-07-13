import React from 'react';
import { useState } from 'react';

const Conditional_Rendering = () => {
  const [hide, setHide] = useState(false);
  function handleChange() {
    setHide(true);
  }

  function handleChanged(){
    setHide(false);
  }

  return (
    <div className='card' style={{margin:"2em" ,padding:"2rem", backgroundColor:'aqua'}}>
      <button onClick={handleChange} >Click to unhide</button>
      {hide ? ( <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          quisquam harum perspiciatis molestias ipsa quae ipsum quas explicabo
          laboriosam minus!
        </h4> ) : null}
      <button onClick={handleChanged}>Click to hide</button>
    </div>
  );
};

export default Conditional_Rendering;