import React from 'react'
import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";



function TravelList() {
const [travelCards, setTravelCards] = useState(travelPlansData)

const clone = JSON.parse( JSON.stringify(travelPlansData))

const removePlan = (indexToDelete) =>{
  clone.splice(indexToDelete, 1)
  setTravelCards(clone)
}

  return (
    <div className="card-container">

      {travelCards.map((eachPlan, index) =>{
       return (

        <div key={eachPlan.id} className='main-card'>
          <img src={eachPlan.image} alt={eachPlan.destination} style={{height:"200px"}}/>
          <div className="cardDetails">
          <h2>{eachPlan.destination} ({eachPlan.days} days)</h2>
          <p>{eachPlan.description}</p>
          <p>Price: {eachPlan.totalCost} €</p>
          </div>
          <div className='Deals'>
          {eachPlan.totalCost <= 350 && <span>Great Deal</span>}
          {eachPlan.totalCost >= 1500 && <span>Premium</span>}
          {eachPlan.allInclusive && <span>All-Inclusive</span>}
            
          </div>
          <button onClick={() => removePlan(index)}>Borrar</button>
        </div>
       )
      

         
})
      }
      
    </div>
  )
}

export default TravelList