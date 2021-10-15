import React from 'react';
import { useAppContext } from '../context/providers/AppContext';

import '../styles/components/Products.styl';

import Product from './Product';

const Products = () => {
  const { products, addToCart } = useAppContext();

  const handleAddToCart = product => () => {
    addToCart(product);
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
