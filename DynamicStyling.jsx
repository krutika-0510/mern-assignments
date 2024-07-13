import React from 'react';
import { useState } from 'react';

const DynamicStyling = () => {
    const defaultStyles = {
      backgroundColor: 'lightgreen',
      width: '100px',
      height: '100px',
    };
  
    const [styles, setStyles] = useState(defaultStyles);
    function handleChanged() {
      setStyles({
        backgroundColor: 'yellow',
        width: '100px',
        height: '100px',
      });
    }
  
    function handleChange() {
      setStyles({
        backgroundColor: 'yellow',
        width: '200px',
        height: '200px',
      });
    }
  
    function handleRightClick(event) {
      event.preventDefault();
      setStyles(defaultStyles);
    }

  return (
    <div
      style={{padding: '50px', borderRadius: '5px', border: '1px solid black', backgroundColor: styles.backgroundColor, width: styles.width, height: styles.height, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClick={handleChanged}
      onDoubleClick={handleChange}
      onContextMenu={handleRightClick}
    >
      <h1>Box</h1>
    </div>
  );
};

export default DynamicStyling;