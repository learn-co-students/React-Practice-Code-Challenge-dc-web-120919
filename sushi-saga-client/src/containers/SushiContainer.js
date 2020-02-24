import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.map(sushi => <Sushi eatSushi={props.eatSushi} eaten={false} sushiInfo={sushi} sushiMeal={props.sushiMeal}/>)
        }


        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer