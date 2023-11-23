import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { addToWishlist } from '../redux/wishlistSlice'

function ItemCard({ data }) {
    const dispatch=useDispatch()
    return (
        <div>
            <div className="row container">
                {
                    data.map(i => (
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <Link to={`view/${i.id}`} style={{ textDecoration: 'none' }}>
                                <div class="card m-5 " style={{ width: '100%', height: '500px' }}>
                                    <img style={{ height: '300px' }} src={i.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{i.title}</h5>
                                        <p class="card-text">Rs. {i.price}</p>
                                       
                                        <div className='d-flex justify-content-between'>
                                        {/* <Link to={'/cart'}> */}
                                            <div className='btn' onClick={(()=>dispatch(addToCart(i)))}>
                                               <i class="fa-solid fa-cart-shopping fa-3x p-2 text-success"></i> 
                                            </div>
                                            {/* </Link> */}
                                            {/* <Link to={'/wishlist'}> */}
                                            <div className='btn'  onClick={(()=>dispatch(addToWishlist(i)))}>
                                                <i class="fa-regular fa-heart fa-3x p-2 text-danger"></i>
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemCard