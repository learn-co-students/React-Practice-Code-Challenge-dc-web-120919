import React from 'react'
const MoneyForm = (props) => { 

    return( 
        <form onSubmit={props.addMoney}>
            <input 
            type="number"
            placeholder="Add Money!"
            defaultValue=''
            />
            <input 
            type="submit"
            />
        </form>
    )
}

export default MoneyForm