import React, { Fragment } from 'react';
import './App.css';
import SimpleComponent from './components/SimpleComponent';

// There are three types of inputs...
// 1. if a falsy value => return live clock in a pretty format
// 2. an array of elements => return a list of divs, each containing one element of the array
// 3. anything else => values in a div (for this purpose, I wrote a string)
const falsey = false;
const arrayOfElements = [
  'element 1',
  'element 2',
  'element 3'
  ];
const anythingElse = "Hello! My name is Noa.  My dream job is to be a Software Engineer.  I would like to warmly thank you for this opportunity and your consideration!";

function App() {
  // The 'SimpleComponent' will take property named 'input', pass it down to our 'SimpleComponent', and render the 3 different data types
  return (
    <Fragment>
      <SimpleComponent
        input={falsey}
      />
      <SimpleComponent
        input={arrayOfElements}
      />
      <SimpleComponent
        input={anythingElse}
      />
    </Fragment>
  );
}

export default App;
