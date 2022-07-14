import React, { useState } from 'react';
import reactDom from 'react-dom';

const App = () => {
  const [ age, setAge ] = useState(0);
  const [ name, setName ] = useState("dan");
  return (
    <>
      Age: { age }, Name: { name }
      <button onClick={ () => setAge(age + 1) }>Growing up</button>
    </>
  )
};
reactDom.render(<App/>, document.getElementById('root'));
