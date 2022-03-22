import React from 'react'

export const Button = ({ children, id, click, active = true }) => {

    return (
        <button 
            type="button" 
            className="button_start" 
            onClick={ click } 
            id={ id }
            disabled={ !active }
        >
            {children}
        </button>
    )
}