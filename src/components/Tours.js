import React from 'react'
import App from "../App";
import Card from './Cards';

export function Tours({tours, removeTour}){

  return (
    <div className= 'container'>
        <div>
            <h2 className='title'>Plan With Ujjwal</h2>
        </div>
        <div className='cards'> 
            {
                tours.map((tour) =>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
    
  )
}

export default Tours;