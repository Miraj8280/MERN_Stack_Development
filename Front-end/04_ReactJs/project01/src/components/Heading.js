import React from 'react'

const College = () => <h3>JGEC1</h3>
const College2 = () => <h3>JGEC2</h3>

// export direct
export const College3 = () => <h3>JGEC3</h3>


const District = () => <h3>Uttar Dinajpur</h3>

const Heading = () => {
    let x = "This is Heading component";

  return (
    <>
        <div>Heading</div>
        {x}
    </>
  )
}

export default Heading;
export {College, College2, District};
// or we can directly export a component