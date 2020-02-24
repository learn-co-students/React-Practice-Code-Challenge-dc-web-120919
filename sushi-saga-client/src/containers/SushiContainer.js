import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // debugger
  return (
    <Fragment>
      <div className="belt">
        {
          props.renderFourSushi.map((sushi, index) => <Sushi key={index} sushi={sushi} sushiHandler={props.sushiHandler} eatenSushi={props.eatenSushi}/>)
        }
        <MoreButton gettingMoreSushi={props.gettingMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer