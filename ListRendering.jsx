import React, { useState } from 'react';

function List_Rendering() {
  const ages = [12, 43, 61, 13, 18];
  const [age, setAge] = useState(ages);
  const [filteredAges, setFilteredAges] = useState(ages);
  const [newAge, setNewAge] = useState('');

  function handleChange(event) {
    const inputValue = event.target.value.toLowerCase(); 

    if (inputValue === '') {
      setFilteredAges([...age]); 
    } else {
      const keywords = inputValue.split(' '); 

      if (keywords.length === 2 && (keywords[0] === 'below' || keywords[0] === 'above')) {
        const operator = keywords[0] === 'below' ? '<' : '>';
        const no = parseInt(keywords[1]);

        const filtered = `age.filter(age => eval(${age} ${operator} ${no}))`; 
        setFilteredAges(filtered);
      } else {
        setFilteredAges([...age]) 
      }
    }
  }

  function handleAddAge() {
    if (newAge !== '' && !isNaN(newAge)) {
      const updatedAges = [...age, parseInt(newAge)];
      setAge(updatedAges);
      setFilteredAges(updatedAges);
      setNewAge('');
    }
  }

  return (
    <div style={{ margin: "2em", padding: "2rem", backgroundColor: 'aqua' }}>
      <h1>Age</h1>
      <input type="text" value={newAge} onChange={(e) => setNewAge(e.target.value)}
        placeholder="Enter new age"
        style={{ margin: "1em", padding: "0.5em" }}
      />
      <button onClick={handleAddAge} style={{ margin: "1em", padding: "0.5em" }}>Add Age</button>

      <input type="text" onChange={handleChange} style={{ margin: "1em", padding: "0.5em" }} />
      <p>note: To filter type in input box "below x" or "above x"</p>
      <ul>
        {filteredAges.map((age, index) => (
          <li key={index}>{age}</li>
        ))}
      </ul>
    </div>
  );
}

export default List_Rendering;