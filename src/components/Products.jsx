import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Products.styl';
import Product from './Product';

const Products = () => {
  const { products } = useContext(AppContext);

  const handleAddToCart = product => () => {
    console.log(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
