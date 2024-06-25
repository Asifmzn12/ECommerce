/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'; 

import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);

            })
            .catch(error => console.error('Error fetching the product details:', error));
    }, [id]);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success('Item added to cart successfully!');
    };

    if (loading) {
        return (
            <div className="container text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
              
            </div>
        );
    }
    return (
        <div className="container py-5">
            <div className='row'>
                <div className='col-md-5'>
                    <div className="shadow p-3 mb-5 align-items-start">
                        <div className='img-box'>
                            <img src={product.image} alt={product.title} className='img-fluid' />
                        </div>
                        <Card.Body className='py-4 details'>
                            <h4 className='text-wrap mt-3'>{product.title}</h4>
                            <p>{product.description}</p>
                            <Card.Text><span className='fw-bold'>Category:</span> {product.category}</Card.Text>
                            <div className='d-flex align-items-center gap-4 justify-content-between'>
                                <Card.Text className='m-0'><span className='fw-bold'>Price: </span>${product.price}</Card.Text>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductDetails;
