import React, { Fragment, useEffect, useState } from 'react';

function SimpleComponent({ input }) {
  const [date, setDate] = useState(new Date().toLocaleString())
  
  // live-updating date and time per second
  const getLiveTime = () => {
    const perSecond = setInterval(() => {
      setDate(new Date().toLocaleString())
    }, 1000)

    return clearInterval(perSecond)
  }

  useEffect(() => {
    getLiveTime();
  })
  
  // if 'input' is falsey...
  if (input === false) {
    // ...display pretty clock
    return (
      <Fragment>
        <div>
          {date.toLocaleString()}
        </div>
      </Fragment>
    )
  } 
  
  // if 'input' is an array...
  else if (Array.isArray(input) === true) {
    const showElements = input.map( (element, id) => {
      return (
        <div key={id}>
          {element}
        </div>
      )
    })

    // ...display each element
    return (
      <Fragment>
        {showElements}
      </Fragment>
    )
  }

  // if 'input' is anything else...
  else {
    // ...display the value in a div
    return (
      <Fragment>
        <div>
          {input}
        </div>
      </Fragment>
    )
  }
}

export default SimpleComponent;