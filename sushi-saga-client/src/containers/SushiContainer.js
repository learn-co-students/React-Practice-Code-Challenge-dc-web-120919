import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {
  

  return (
    <Fragment>
      <div className="belt">
        {
       props.allSushi().map( sushi => <Sushi key={sushi.id} sushiObj={sushi} onClick={props.addEatenSushi} eatenStatus={props.eatenStatus} />)
        }
        <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer