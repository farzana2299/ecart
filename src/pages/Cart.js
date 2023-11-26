import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartArray = useSelector(state => state.cartSlice)
    // console.log(cartArray);
    if (cartArray.length != 0) {
        var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
    }
    return (
        <div>
            {
                cartArray?.length > 0 ? (
                    <div>
                        <table class="table container table-success table-striped table-bordered w-75 tb">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartArray.map((i, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{i?.title}</td>
                                            <td className='text-center'>
                                                <img style={{ width: '10%', height: '10%', position: 'relative', right: '200px' }} src={i.image} alt="" />
                                            </td>
                                            <td>{i.price}</td>
                                            <tr className='container'>
                                                <div onClick={() => dispatch(removeCart(i?.id))} className=' btn dt' >
                                                    <i class="fa-solid fa-trash text-danger"></i>
                                                </div>
                                            </tr>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                        <div className='text-end pe-5 m-5' style={{
position:'relative',top:'50px'        
                        }}>
                            <h3 className='fs-2 text-info'>Total Price <b>{total}</b>$</h3>
                            <button onClick={() => navigate('/')} className='btn btn-success px-5'>CHECKOUT</button>
                        </div>
                    </div>
                ) : <h1>No Items in the cart</h1>
            }
        </div>
    )
}

export default Cart