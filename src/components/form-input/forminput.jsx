import React from 'react';
import './forminput.scss'

export default function Forminput({handleChange, label, name, type, value}) {
    return (
        <div className='group'>
            <input type={type} className="form-input" onChange={handleChange} name={name} value={value} required />
            {
                label ? (<label className={`${value.length ? 'shrink' : ''} form-input-label `}> 
                
                {label}

                 </label>) : null
            }
            
        </div>
    )
}
