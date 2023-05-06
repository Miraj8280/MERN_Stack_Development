import React from 'react'
// import { useParams } from 'react-router-dom';

// show the product id on the page
const Product = ({value}) => {
    // const params = useParams();
  return (
    <div>
        {/* <h3>Your product id is: {params.id}</h3> */}
        <h3>{value}</h3>
    </div>
  )
}

export default Product