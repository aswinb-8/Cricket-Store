import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { CRICKET_PRODUCTS } from '../assets/cricketproducts.js';
import { useNavigate } from 'react-router-dom';
import './Cricket_Products.css';

const Cricket_Products = ({ searchQuery = '' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const filteredProducts = CRICKET_PRODUCTS.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-grid">
      {filteredProducts.map(product => {
        const isInCart = cartItems.some(item => item.id === product.id);
        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-rating">Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
            {isInCart ? (
              <button className="go-to-cart-button" onClick={handleGoToCart}>Go to Cart</button>
            ) : (
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cricket_Products;


