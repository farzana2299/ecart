import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import axios from 'axios'

function Landing() {
      //state to hold the datas
  const [item, setItems] = useState([])
  //api to get all item from db.json
  const fetchItem = async () => {
    var result = await axios.get('https://fakestoreapi.com/products')
    setItems(result.data)
  }
  console.log(item);
  useEffect(() => {
    fetchItem()
  }, [])
  return (
    <div>
        <ItemCard data={item}></ItemCard>
    </div>
  )
}

export default Landing