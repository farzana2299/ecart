import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/productSlice'


function Header() {
    const cartArray=useSelector(state=>state.cartSlice)
    const dispatch=useDispatch()
    return (
        <div className='row'>
            <nav class="navbar" style={{ backgroundColor: 'blue' }}>
                <div class="container-fluid col-lg-6">
                    <Link to={'/'}>
                    <a class="navbar-brand text-warning"> 
                        <img src="https://i.postimg.cc/2jJsvTnq/download-9.png" alt="Logo"
                            width="200" height="75" class="d-inline-block align-text-top lg" />
                    </a>
                    </Link>
                </div>
                <div className='col-lg-6'>
                    <form class="d-flex" role="search">
                        <input onChange={(e)=>dispatch(search(e.target.value))} class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-warning" type="submit">Search</button>
                        <div>
                            <Link to={'/cart'}>
                        <div className='btn text-white'>
                            <i class="fa-solid fa-cart-shopping fa-2x mx-2 text-light"></i>
                            <b>
                            {
                                cartArray?cartArray.length:0
                            }</b>
                        </div>
                        </Link>
                        <Link to={'/wishlist'}>
                        <div className='btn text-danger'>
                            <i class="fa-regular fa-heart fa-3x mx-2 text-danger"></i>
                            
                        </div>
                        </Link>
                    </div>
                    </form>
                   
                </div>
            </nav>
        </div>
    )
}

export default Header