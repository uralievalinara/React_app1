import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  let capitalizedCategory = product.category
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details-container">
        <div className="product-info">
          <p className="product-category">{capitalizedCategory}</p>
          <p className="product-title">{product.title}</p>
        </div>
        <div className="product-actions">
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
