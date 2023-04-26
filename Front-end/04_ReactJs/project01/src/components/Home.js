import React from 'react';
import Product from './Product';

const Home = () => {
    const items = ['Shirt', 'Pant', 'Jeans', 'Shoes'];
  return (
    <div>
        {/* use of map function to show all items from an array */}
        {
            items.map(i => (
                <Product value={i} key={i}/>
            ))
        }
    </div>
  )
}

export default Home