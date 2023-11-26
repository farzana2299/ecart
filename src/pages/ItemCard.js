import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { addToWishlist } from '../redux/wishlistSlice'

function ItemCard({ data }) {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row container">
                {
                    data.map(i => (
                        <div className="col-lg-3 col-md-6 col-sm-12">


                            <div class="card m-5 " style={{ width: '100%', height: '400px' }}>
                                <Link to={`view/${i.id}`} style={{ textDecoration: 'none' }}>
                                    <div>
                                        <img style={{ height: '200px' }} src={i.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title">{i.title}</p>
                                            <p class="card-text">Rs. {i.price}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-between'>

                                    <div className='btn' onClick={(() => dispatch(addToCart(i)))}>
                                        <i class="fa-solid fa-cart-shopping fa-2x p-2 text-success"></i>
                                    </div>


                                    <div className='btn' onClick={(() => dispatch(addToWishlist(i)))}>
                                        <i class="fa-regular fa-heart fa-2x p-2 text-danger"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                            
                   
            ))
                }
        </div>
        </div >
    )
}

export default ItemCard