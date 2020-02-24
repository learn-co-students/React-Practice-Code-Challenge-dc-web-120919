import React, { Fragment } from 'react'

const Sushi = (props) => {
  // let {sushi} = props.sushi
  
  return (
    <div className="sushi">
      <div className="plate">
      {props.eatenSushi.includes(props.sushi)?
          null
        :
          <img src={props.sushi.img_url} onClick={()=> props.sushiHandler(props.sushi)} width="100%" />
      }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi


