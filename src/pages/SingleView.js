import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function SingleView() {
    const [allItem, setItem] = useState([])
    const params = useParams()
    const getItem = async () => {
        const result = await fetch('/db.json')
        result.json().then(data => {
            setItem(data);
        })
    }
    // console.log(allUser);
    useEffect(() => {
        getItem()
        // console.log(params.id)
    }, [])
    const singleItem = allItem.find(i => i.id == params.id)
    console.log(singleItem);
    return (
        <div>
            <div className='text-center'>
                {
                    singleItem ?
                        <div className='row container w-75'>
                            <div className="col-lg-6">
                            <img src={singleItem.image} style={{width:'200px',height:'325px'}} alt="" />
                            </div>
                            <div className="col-lg-6">
                            <ul className='list-group'>
                                <li class="list-group-item"><h1>{singleItem.title}</h1></li>
                                <li class="list-group-item">Rs:{singleItem.price}</li>
                                <li class="list-group-item">RATING:{singleItem.rating.rate}</li>
                                <li class="list-group-item">{singleItem.description}</li>

                            </ul>
                            </div>
                            
                            
                            
                        </div> : <h1>No Item present</h1>
                }
            </div>
        </div>
    )
}

export default SingleView