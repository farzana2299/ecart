import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removewishList } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
    const dispatch = useDispatch()
    const wishlistArray = useSelector(state => state.wishlistSlice)
    const handleAddCart=(i)=>{
        dispatch(addToCart(i))
        dispatch(removewishList(i.id))
    }
    return (
        <div>
            
            {
                wishlistArray?.length > 0 ? (
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
                                wishlistArray.map((i, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{i?.title}</td>
                                        <td className='text-center'>
                                            <img style={{ width: '10%', height: '10%', position: 'relative', right: '200px' }} src={i.image} alt="" />
                                        </td>
                                        <td>{i.price}</td>
                                        <tr className='container text-center'>
                                            <div onClick={()=>dispatch(removewishList(i?.id))} className=' btn dt' >
                                                <i class="fa-solid fa-trash text-danger"></i>
                                            </div>
                                            <div onClick={()=>handleAddCart(i)} className=' btn dt' >
                                            <i class="fa-solid fa-cart-plus text-info"></i>
                                            </div>
                                        </tr>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                ) : <h1>No Items in the Wishlist


                </h1>

}
        </div>
    )
}

export default Wishlist