import React, { useState } from 'react'

const TravelPlanCard = ({ plan,removeElement,favoriteElement }) => {
    const[isFavorite,setIsfavorite]=useState(false);
  return (
    <div className='travelCard'>
                <img className='showImg' src={plan.image} alt={plan.description}/>
                <div className='infomation'>
                <h3>{plan.destination}({plan.days})</h3>
                <h5>{plan.description}</h5>
                <h5>Price:{plan.totalCost}€</h5> 
                <div className='dealLabel'>
                    <div className='greatDeal'>
                    {plan.totalCost <= 350 ? 'Great Deal' : plan.totalCost>=1500 ? 'Premium':''}
                    </div>
                    <div className='allInclusive'>
                        {plan.allInclusive===true ? 'AllInclusive' :""}
                    </div>
                    <button className='Delete' onClick={()=>removeElement(plan.id)}>
                        Delete 
                    </button>
                    <button className='Favorites' 
                    style={{ backgroundColor: isFavorite ? "red" : "gray" }}
                    onClick={()=>{ 
                        setIsfavorite(!isFavorite)                      
                        return (favoriteElement(plan.id))
                    }}>
                      <div className='favoritesHeart'>♡</div> 
                    </button>
                </div>
                </div>              
                </div>

            )
  
}

export default TravelPlanCard