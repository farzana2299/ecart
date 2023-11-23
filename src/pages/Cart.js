import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cartSlice';

function Cart() {
    const dispatch = useDispatch()
    const cartArray = useSelector(state => state.cartSlice)
    console.log(cartArray);
    return (
        <div>
            {
                cartArray?.length > 0 ? (
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
                ) : <h1>No Items in the cart</h1>
            }
        </div>
    )
}

export default Cart