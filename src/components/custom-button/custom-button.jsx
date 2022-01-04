import React from 'react';
import './custom-button.scss'

export default function CustomButton({children, type, value}) {
    return (
        <button className='custom-button' type={type} value={value} >
            {children}
        </button>
    )
}
