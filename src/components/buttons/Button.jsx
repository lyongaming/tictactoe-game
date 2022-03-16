import React from 'react'

export const Button = ({ children }) => {

    return (
        <button type="button" className="button_start">
            {children}
        </button>
    )
}