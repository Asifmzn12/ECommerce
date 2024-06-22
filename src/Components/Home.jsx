/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../assets/css/hero.css";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Item added to cart successfully!');
  };

  return (
    <div className="container-fluid container-lg py-4 py-lg-5 position-relative">
      <div className="">
        <h2 className="my-3 text-center text-md-start"><span>Products</span></h2>
      </div>
      <div className="product-list my-4 py-md-4 py-2 container">
        <div className='row gy-5 justify-content-between '>
          {products.map(product => (
            <div key={product.id} className="rounded col-sm-6 col-lg-4 col-xl-3">
              <div className=' rounded shadow d-flex justify-content-center align-items-center'>
              <Card className='d-flex flex-column border-0 gap-2 r  '>
                <div className='img-box text-center mt-2'>
                  <img src={product.image} alt={product.title} className='img-fluid ' />
                </div>
                <Card.Body>
                  <p className='fw-bold'>{product.title}</p>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/product/${product.id}`} className='text-decoration-none text-muted text-dark'>
                      View Details
                    </Link>
                    <button
                      className='btn btn-primary'
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Card.Body>
              </Card>

              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
