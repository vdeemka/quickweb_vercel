import React from 'react'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({children, type, onClik, buttonStyle, buttonSize}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onCLick={onClik}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}