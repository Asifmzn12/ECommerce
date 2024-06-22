/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleQuantityChange = (itemId, newQuantity) => {
        updateQuantity(itemId, newQuantity);
    };

    if (cartItems.length === 0) {
        return (
            <div className='container py-5'>
                <h1>Cart</h1>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className='container py-lg-5 py-2'>
            <h1 className='text-start my-3'>Cart</h1>
            <div className='row gy-3 justify-content-start'>
                <div className='col-md-9'>
                    <div className='row gy-3 justify-content-start'>
                        {cartItems.map(item => (
                            <div key={item.id} className='col-md-6 col-lg-5 col-xl-4 d-flex'>
                                <Card className='py-2 border-0'>
                                    <div className='img-box text-md-start '>
                                        <img src={item.image} alt={item.title} className='img-fluid' />
                                    </div>
                                    <Card.Body className='details'>
                                        <p>{item.title}</p>
                                        <Card.Text>Price: ${item.price}</Card.Text>
                                        <div className='row align-items-center'>
                                            <div className='col-7'>
                                                <div className='quantity d-flex gap-1'>
                                                    <Button variant='outline-danger' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                                                    <input 
                                                        type='number'
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                        className='form-control '
                                                    />
                                                    <Button variant='outline-success' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>

                                                </div>
                                            </div>
                                            <div className='col-5'>
                                            <Button variant='danger' onClick={() => removeFromCart(item.id)} className=''>
                                                Remove
                                            </Button>
                                            
                                            </div>

                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-md-3'>
                    <h3 className='mt-3'>Total Price: ${total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
