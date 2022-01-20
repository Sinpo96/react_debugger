import React, { useState } from 'react';
import reactDom from 'react-dom';

const App = () => {
    const [text, setText] = useState("")

    return (
        <div>
            <span>test {text}</span>
            <button onClick={() => setText(String(Math.random()))}>click</button>
        </div>
    )
};
reactDom.render(<App/>, document.getElementById('root'));
