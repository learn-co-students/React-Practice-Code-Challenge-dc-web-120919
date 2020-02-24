import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.gettingMoreSushi()}>
            More sushi!
          </button>
}

export default MoreButton