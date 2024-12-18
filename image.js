import React from 'react';

function Image({ product }) {
  return <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />;
}

export default Image;
