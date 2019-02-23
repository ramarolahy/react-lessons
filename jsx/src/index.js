//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click Me!';
}
// Create a React component
const App = () => {
    //const buttonText = 'Click Me!';
    const buttonText = {text:'Click Me!'};
    const style = {backgroundColor:'blue', color:'white'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            {/* We cannot print JS Objects as texts with JSX */}
            <button style={style}>{buttonText.text}</button>   
        </div>
        );

};

// Take the React component and show on screen
ReactDOM.render( 
    <App /> ,
    document.querySelector('#root')
);