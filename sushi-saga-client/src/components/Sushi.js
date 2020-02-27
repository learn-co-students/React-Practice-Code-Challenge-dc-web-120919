import React, { Fragment } from 'react'



const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e)=> props.eatSushi(e, props.sushiInfo)}>
        { 
          (props.sushiMeal.includes(props.sushiInfo)) ?
            null
          :
          <img src={props.sushiInfo.img_url} width="100%" alt={props.sushiInfo.name}/> 
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiInfo? props.sushiInfo.name : null } - ${props.sushiInfo? props.sushiInfo.price : null }
      </h4>
    </div>
  )
}

export default Sushi