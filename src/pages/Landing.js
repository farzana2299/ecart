import React, { useEffect} from 'react'
import ItemCard from './ItemCard'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

function Landing() {
  const dispatch=useDispatch()
  const {loading,allProducts,error}=useSelector(state=>state.productSlice)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  // console.log(allProducts);
  return (
    <div>
        <ItemCard data={allProducts}></ItemCard>
    </div>
  )
}

export default Landing