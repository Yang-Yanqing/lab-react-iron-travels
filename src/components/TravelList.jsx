import React, { useState } from 'react'
import travelPlansData from "../data/travel-plans.json"
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);
  const [favorites,setFavorites] = useState([]);
 

  const removeElement = (id) => {
    const target= travelPlan.find((plan)=>plan.id===id);
    if(!target)return;
    setFavorites(function(prev) {const exists = prev.some(function(p) {
    return p.id === id;});
  if (exists) {return prev; } else {return [...prev, target]; }
});
  };

  const favoriteElement = (id) => {
    const filteredTravelCard = travelPlan.filter(plan => plan.id === id);
    setTravelPlan(filteredTravelCard)
  }

  return (
    <div className='travelList'>
      {travelPlan.map((plan) => (
        <>
        <TravelPlanCard key={plan.id} plan={plan} removeElement={removeElement} favoriteElement={favoriteElement} />
        
        </>
      ))}
    </div>
  );
};

export default TravelList;